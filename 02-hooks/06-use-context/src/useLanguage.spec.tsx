import * as React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { LanguageProvider } from './languageContext';
import { useLanguage } from './useLanguage';

describe('useLanguage specs', () => {
  it('should return a message with language equals "spanish" when it renders the hook', () => {
    // Arrange
    const provider: React.FunctionComponent = props => (
      <LanguageProvider>{props.children}</LanguageProvider>
    );

    // Act
    const { result } = renderHook(() => useLanguage(), { wrapper: provider });

    // Assert
    expect(result.current.message).toEqual('The current language is: spanish');
  });

  it('should return a message with language equals "english" when it call setLanguage with "english"', () => {
    // Arrange
    const provider: React.FunctionComponent = props => (
      <LanguageProvider>{props.children}</LanguageProvider>
    );

    // Act
    const { result } = renderHook(() => useLanguage(), { wrapper: provider });

    act(() => {
      result.current.setLanguage('english');
    });

    // Assert
    expect(result.current.message).toEqual('The current language is: english');
  });
});
