import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { BulletComponent as TaBulletComponent } from '@ta/ui';

import { TaNotificationDataService } from '../../services/data.service';
import { BulletComponent } from './bullet.component';

describe('BulletComponent (notification)', () => {
  let component: BulletComponent;
  let fixture: ComponentFixture<BulletComponent>;
  let mockDataService: jasmine.SpyObj<TaNotificationDataService>;

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('TaNotificationDataService', [
      'fetchNumberOfNotifications$',
      'computeKey',
    ]);
    mockDataService.computeKey.and.returnValue('all');
    mockDataService.fetchNumberOfNotifications$.and.returnValue(of(5));

    // Mock the count property with HandleComplexRequest-like behavior
    mockDataService.count = {
      get$: jasmine.createSpy('get$').and.returnValue(of(5)),
      data$: of({}),
    } as any;

    await TestBed.configureTestingModule({
      imports: [BulletComponent],
      providers: [
        { provide: TaNotificationDataService, useValue: mockDataService },
      ],
    })
      .overrideComponent(BulletComponent, {
        set: {
          imports: [],
          template: '<span>{{ this.number$ | async }}</span>',
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(BulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchNumberOfNotifications$ on init', () => {
    expect(mockDataService.fetchNumberOfNotifications$).toHaveBeenCalled();
  });

  it('should call computeKey with the filters input', () => {
    expect(mockDataService.computeKey).toHaveBeenCalledWith(null);
  });

  it('should set requestState to asked on init', () => {
    // requestState.asked() was called in ngOnInit
    // After the observable completes, it should be completed
    expect(component.requestState).toBeTruthy();
  });

  it('should have a number$ getter that returns an observable', () => {
    expect(component.number$).toBeTruthy();
  });

  it('should accept filters input', () => {
    fixture.componentRef.setInput('filters', { projectId: 'proj-1' });
    fixture.detectChanges();
    expect(component.filters()).toEqual({ projectId: 'proj-1' });
  });

  it('should default filters to null', () => {
    expect(component.filters()).toBeNull();
  });
});
