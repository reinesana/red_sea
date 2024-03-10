import React, { useState } from 'react';

const LanguageSelector = ({ apiKey }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const translateText = async (text, targetLanguage) => {
    try {
      // Make HTTP request to Google Translate API
      const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
        }),
      });
      const data = await response.json();
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return null;
    }
  };

  const handleLanguageChange = async (event) => {
    const language = event.target.value;
    // Translate all content in the app to the selected language
    // Replace 'Hello' with your actual text content
    const translatedText = await translateText('Hello', language);
    setSelectedLanguage(language);
    // Apply translated text to all content in the app
    // Replace 'Hello' with your actual text content
  };

  return (
    <select className='language-change' value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="ar">Arabic</option>
      <option value="fr">French</option>
      <option value="ru">Russian</option>
      <option value="ja">Japanese</option>
      <option value="ru">Russian</option>
      <option value="hi">Hindi</option>
    </select>
  );
};

export default LanguageSelector;
