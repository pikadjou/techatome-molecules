import { Subscription } from 'rxjs';

import { SubscriberHandler } from './handler';

describe('SubscriberHandler', () => {
  let handler: SubscriberHandler;

  beforeEach(() => {
    handler = new SubscriberHandler();
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
  });

  it('should register a subscription', () => {
    const subscription = new Subscription();
    handler.registerSubscription(subscription);
    expect((handler as any)._subscriptionList.length).toBe(1);
  });

  it('should register multiple subscriptions', () => {
    handler.registerSubscription(new Subscription());
    handler.registerSubscription(new Subscription());
    handler.registerSubscription(new Subscription());
    expect((handler as any)._subscriptionList.length).toBe(3);
  });

  it('should unsubscribe all subscriptions on destroy', () => {
    const sub1 = new Subscription();
    const sub2 = new Subscription();
    spyOn(sub1, 'unsubscribe');
    spyOn(sub2, 'unsubscribe');

    handler.registerSubscription(sub1);
    handler.registerSubscription(sub2);
    handler.destroy();

    expect(sub1.unsubscribe).toHaveBeenCalled();
    expect(sub2.unsubscribe).toHaveBeenCalled();
  });
});
