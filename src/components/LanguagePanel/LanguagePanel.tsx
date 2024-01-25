export const LanguagePanel = () => {

    let language = 'ru';
    const className = 'languagePanel-item';
    const classNameChoisen = 'languagePanel-item  bg-secondary';

    return (
        <div className="languagePanel flex min-w-16 justify-between">
            <div className={language==='ru'?classNameChoisen:className}>РУС</div>
            <div className={language==='uk'?classNameChoisen:className}>УКР</div>
        </div>
    );
  };