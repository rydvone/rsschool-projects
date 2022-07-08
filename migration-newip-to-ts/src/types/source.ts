export interface ResponseSource {
    status: 'ok' | 'error';
    sources: ISourse[];
}

export interface ISourse {
    id: string;
    name: string;
    description: string;
    url: string;
    category: ICategory;
    language: ILanguage;
    country: ICountry;
}

enum ICategory {
    BUSINESS = 'business',
    ENTERTAINMENT = 'entertainment',
    GENERAL = 'general',
    HEALTH = 'health',
    SCIENCE = 'science',
    SPORTS = 'sports',
    TECHNOLOGY = 'technology',
}

enum ILanguage {
    AR = 'ar',
    DE = 'de',
    EN = 'en',
    ES = 'es',
    FR = 'fr',
    HE = 'he',
    IT = 'it',
    NL = 'nl',
    NO = 'no',
    PT = 'pt',
    RU = 'ru',
    SV = 'sv',
    UD = 'ud',
    ZH = 'zh',
}

enum ICountry {
    AE = 'ae',
    AR = 'ar',
    AT = 'at',
    AU = 'au',
    BE = 'be',
    BG = 'bg',
    BR = 'br',
    CA = 'ca',
    CH = 'ch',
    CN = 'cn',
    CO = 'co',
    CU = 'cu',
    CZ = 'cz',
    DE = 'de',
    EG = 'eg',
    FR = 'fr',
    GB = 'gb',
    GR = 'gr',
    HK = 'hk',
    HU = 'hu',
    ID = 'id',
    IE = 'ie',
    IL = 'il',
    IN = 'in',
    IT = 'it',
    JP = 'jp',
    KR = 'kr',
    LT = 'lt',
    LV = 'lv',
    MA = 'ma',
    MX = 'mx',
    MY = 'my',
    NG = 'ng',
    NL = 'nl',
    NO = 'no',
    NZ = 'nz',
    PH = 'ph',
    PL = 'pl',
    PT = 'pt',
    RO = 'ro',
    RS = 'rs',
    RU = 'ru',
    SA = 'sa',
    SE = 'se',
    SG = 'sg',
    SI = 'si',
    SK = 'sk',
    TH = 'th',
    TR = 'tr',
    TW = 'tw',
    UA = 'ua',
    US = 'us',
    VE = 've',
    ZA = 'za',
}
