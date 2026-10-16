import {
  isIosDevice,
  sameApplicationServerKey,
  urlBase64ToUint8Array,
  withTimeout,
} from '@lib/capacitor/web-push/web-push.utils';

describe('web-push.utils', () => {
  it('décode une clé base64url sans padding', () => {
    expect(Array.from(urlBase64ToUint8Array('AQID'))).toEqual([1, 2, 3]);
    expect(Array.from(urlBase64ToUint8Array('_-8'))).toEqual([255, 239]);
  });

  it('compare la clé courante à la clé VAPID', () => {
    const key = urlBase64ToUint8Array('AQID');
    expect(sameApplicationServerKey(key.buffer, 'AQID')).toBeTrue();
    expect(sameApplicationServerKey(key.buffer, 'AQIE')).toBeFalse();
    expect(sameApplicationServerKey(key.buffer, 'AQIDBA')).toBeFalse();
  });

  it('suppose la clé identique quand le navigateur ne l’expose pas', () => {
    expect(sameApplicationServerKey(null, 'AQID')).toBeTrue();
    expect(sameApplicationServerKey(undefined, 'AQID')).toBeTrue();
  });

  it('reconnaît un appareil iOS à son user agent', () => {
    expect(isIosDevice('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)')).toBeTrue();
    expect(isIosDevice('Mozilla/5.0 (Windows NT 10.0; Win64; x64)')).toBeFalse();
  });
});

describe('withTimeout', () => {
  it('rend la valeur quand la promesse répond à temps', async () => {
    await expectAsync(withTimeout(Promise.resolve('ok'), 50, 'late')).toBeResolvedTo('ok');
  });

  it('rejette avec le message quand la promesse ne répond jamais', async () => {
    await expectAsync(withTimeout(new Promise<never>(() => {}), 10, 'late')).toBeRejectedWithError('late');
  });
});
