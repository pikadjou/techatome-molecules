import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MapComponent } from './map.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    // Mock google.maps globally since the component uses google.maps in class body
    (window as any).google = {
      maps: {
        Animation: { DROP: 1 },
        SymbolPath: { BACKWARD_CLOSED_ARROW: 4 },
        MapOptions: {},
        LatLngBounds: class {
          extend() {}
        },
        DirectionsService: class {
          route() {}
        },
        DirectionsRenderer: class {
          setMap() {}
          setDirections() {}
        },
        DirectionsStatus: { OK: 'OK' },
        TravelMode: { DRIVING: 'DRIVING' },
        Polyline: class {
          setMap() {}
        },
        geometry: {
          encoding: {
            decodePath: () => [],
          },
        },
      },
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MapComponent],
    })
      .overrideComponent(MapComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    delete (window as any).google;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have map options with center and zoom', () => {
    expect(component.options.center).toEqual({ lat: 50, lng: 4 });
    expect(component.options.zoom).toBe(4);
  });

  it('should have markers defined', () => {
    expect(component.markers).toBeDefined();
    expect(component.markers.length).toBeGreaterThan(0);
  });

  it('should have selectedPoints defined', () => {
    expect(component.selectedPoints).toBeDefined();
    expect(component.selectedPoints.length).toBe(3);
  });

  it('should have routeSummary initially null', () => {
    expect(component.routeSummary).toBeNull();
  });

  it('should have routeDetails initially empty', () => {
    expect(component.routeDetails()).toEqual([]);
  });

  describe('parseDuration', () => {
    it('should parse hours and minutes', () => {
      expect(component.parseDuration('PT2H30M')).toBe('2 h 30 min');
    });

    it('should parse hours only', () => {
      expect(component.parseDuration('PT3H')).toBe('3 h');
    });

    it('should parse minutes only', () => {
      expect(component.parseDuration('PT45M')).toBe('45 min');
    });

    it('should return original string if no match', () => {
      expect(component.parseDuration('invalid')).toBe('invalid');
    });
  });
});
