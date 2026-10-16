import {
  registerPushSubscription,
  unregisterPushSubscription,
  webPushPublicKey,
} from '@lib/capacitor/web-push/web-push.queries';

describe('web-push.queries', () => {
  const body = (payload: { mutation: { loc?: { source: { body: string } } } }) =>
    (payload.mutation.loc?.source.body ?? '').replace(/\s+/g, ' ');

  it('lit la clé publique sous son nom', () => {
    expect(webPushPublicKey().name).toBe('webPushPublicKey');
  });

  it('enregistre un abonnement via le builder, nommé pour mutateBuilder', () => {
    const input = { auth: 'a', endpoint: 'e', p256dh: 'p' };
    const payload = registerPushSubscription(input);

    expect(payload.name).toBe('registerPushSubscription');
    expect(body(payload)).toContain('($input: RegisterPushSubscriptionInput!)');
    expect(body(payload)).toContain('registerPushSubscription(input: $input) { id lastSeenAt }');
    expect(payload.variables).toEqual({ input });
  });

  it('désinscrit par endpoint sans sélection, le résultat étant un booléen', () => {
    const payload = unregisterPushSubscription('e');

    expect(payload.name).toBe('unregisterPushSubscription');
    expect(body(payload)).toContain('($endpoint: String!)');
    expect(body(payload)).toContain('unregisterPushSubscription(endpoint: $endpoint) }');
    expect(payload.variables).toEqual({ endpoint: 'e' });
  });
});
