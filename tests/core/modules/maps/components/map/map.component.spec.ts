import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { MapComponent } from '@lib/core/modules/maps/components/map/map.component';
import { TA_GOOGLE_MAPS_CONFIG } from '@lib/core/modules/maps/google-maps.config';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    // Mock google.maps globally since the component reads google.maps when computing marker options
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
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        MapComponent,
      ],
      providers: [{ provide: TA_GOOGLE_MAPS_CONFIG, useValue: { apiKey: 'test-key' } }],
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
    expect(component.options().center).toEqual({ lat: 50, lng: 4 });
    expect(component.options().zoom).toBe(4);
  });

  it('should have no marker by default', () => {
    expect(component.markers()).toEqual([]);
    expect(component.markerOptions()).toEqual([]);
  });

  it('should derive marker options from the markers input', () => {
    fixture.componentRef.setInput('markers', [{ position: { lat: 50.8503, lng: 4.3517 }, title: 'Bruxelles' }]);
    fixture.detectChanges();

    const options = component.markerOptions();
    expect(options.length).toBe(1);
    expect(options[0].title).toBe('Bruxelles');
    expect(options[0].options.animation).toBe(1);
  });

  it('should have no route point by default', () => {
    expect(component.routePoints()).toEqual([]);
  });

  it('should have routeSummary initially null', () => {
    expect(component.routeSummary()).toBeNull();
  });

  it('should have routeDetails initially empty', () => {
    expect(component.routeDetails()).toEqual([]);
  });

  it('should not call the Routes API with fewer than two points', () => {
    fixture.componentRef.setInput('routePoints', [{ lat: 50, lng: 4 }]);
    fixture.detectChanges();

    component.renderRouteWithRoutesApi();

    expect(component.routeSummary()).toBeNull();
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
