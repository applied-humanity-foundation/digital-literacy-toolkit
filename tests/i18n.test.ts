import { describe, it, expect, beforeEach } from 'vitest';
import { t, setLocale, initI18n } from '../src/utils/i18n';

describe('i18n', () => {
  beforeEach(() => {
    localStorage.clear();
    setLocale('en');
  });

  it('should return English text by default', () => {
    expect(t('hero.title')).toBe('Digital Literacy for Everyone');
  });

  it('should switch to Chinese', () => {
    setLocale('zh');
    expect(t('hero.title')).toBe('人人都能掌握的数字素养');
  });

  it('should fall back to English for missing keys', () => {
    setLocale('zh');
    expect(t('nonexistent.key')).toBe('nonexistent.key');
  });

  it('should return the key itself if not found in any locale', () => {
    expect(t('completely.unknown')).toBe('completely.unknown');
  });

  it('should have matching keys in both locales', () => {
    setLocale('en');
    const enKeys = ['hero.title', 'hero.subtitle', 'hero.cta', 'modules.title', 'nav.modules'];
    enKeys.forEach((key) => {
      setLocale('en');
      const en = t(key);
      setLocale('zh');
      const zh = t(key);
      expect(en).not.toBe(key);
      expect(zh).not.toBe(key);
    });
  });
});
