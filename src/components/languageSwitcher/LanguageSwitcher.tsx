import React, { useState, useEffect } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const languageMap: { [key: string]: string } = { VN: 'vi', US: 'en' };

    const [selectedLanguage, setSelectedLanguage] = useState(
        Object.keys(languageMap).find(key => languageMap[key] === localStorage.getItem('language')) || 'VN'
    );

    const handleSelect = (countryCode: string) => {
        const language = languageMap[countryCode] || 'vi';
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
        setSelectedLanguage(countryCode);
    };

    useEffect(() => {
        const countryCode = Object.keys(languageMap).find(
            key => languageMap[key] === i18n.language
        ) || 'VN';
        setSelectedLanguage(countryCode);
    }, [i18n.language]);

    return (
        <ReactFlagsSelect
            countries={Object.keys(languageMap)}
            customLabels={{ VN: 'Việt Nam', US: 'English' }}
            selected={selectedLanguage}
            onSelect={handleSelect}
            showSelectedLabel={false}
            showOptionLabel={false}
            rfsKey="app-lang"
            placeholder="Select Language"
            className="menu-flags p-0 border-none"
            selectButtonClassName="menu-flags-button p-0 border-none rounded-none font-body"
        />
    );
};

export default LanguageSwitcher;
