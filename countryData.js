// Custom population data added by the author as a backup
const customCountryData = [
    { name: 'Australia', chineseName: '澳洲', population: 26713205 },
    { name: 'Papua New Guinea', chineseName: '巴布亞紐幾內亞', population: 10576502 },
    { name: 'New Zealand', chineseName: '紐西蘭', population: 5213944 },
    { name: 'Fiji', chineseName: '斐濟', population: 928784 },
    { name: 'Solomon Islands', chineseName: '索羅門群島', population: 819198 },
    { name: 'Micronesia', chineseName: '密克羅尼西亞聯邦', population: 526923 },
    { name: 'Vanuatu', chineseName: '萬那杜', population: 327777 },
    { name: 'Samoa', chineseName: '薩摩亞', population: 218019 },
    { name: 'Kiribati', chineseName: '吉里巴斯', population: 134518 },
    { name: 'Tonga', chineseName: '東加', population: 104175 },
    { name: 'Marshall Islands', chineseName: '馬紹爾群島', population: 37548 },
    { name: 'Palau', chineseName: '帛琉', population: 17695 },
    { name: 'Nauru', chineseName: '諾魯', population: 11947 },
    { name: 'Tuvalu', chineseName: '吐瓦魯', population: 9646 },
    { name: 'Russia', chineseName: '俄羅斯', population: 144820423 },
    { name: 'Germany', chineseName: '德國', population: 84552242 },
    { name: 'United Kingdom', chineseName: '英國', population: 69138192 },
    { name: 'France', chineseName: '法國', population: 66548530 },
    { name: 'Italy', chineseName: '義大利', population: 59342867 },
    { name: 'Spain', chineseName: '西班牙', population: 47910526 },
    { name: 'Poland', chineseName: '波蘭', population: 38539201 },
    { name: 'Ukraine', chineseName: '烏克蘭', population: 37860221 },
    { name: 'Romania', chineseName: '羅馬尼亞', population: 19015088 },
    { name: 'Netherlands', chineseName: '荷蘭', population: 18228742 },
    { name: 'Belgium', chineseName: '比利時', population: 11738763 },
    { name: 'Czech Republic', chineseName: '捷克', population: 10735859 },
    { name: 'Sweden', chineseName: '瑞典', population: 10606999 },
    { name: 'Portugal', chineseName: '葡萄牙', population: 10425292 },
    { name: 'Greece', chineseName: '希臘', population: 10047817 },
    { name: 'Hungary', chineseName: '匈牙利', population: 9676135 },
    { name: 'Austria', chineseName: '奧地利', population: 9120813 },
    { name: 'Belarus', chineseName: '白俄羅斯', population: 9056696 },
    { name: 'Switzerland', chineseName: '瑞士', population: 8921981 },
    { name: 'Bulgaria', chineseName: '保加利亞', population: 6757689 },
    { name: 'Serbia', chineseName: '塞爾維亞', population: 6736216 },
    { name: 'Denmark', chineseName: '丹麥', population: 5977412 },
    { name: 'Finland', chineseName: '芬蘭', population: 5617310 },
    { name: 'Norway', chineseName: '挪威', population: 5576660 },
    { name: 'Slovakia', chineseName: '斯洛伐克', population: 5506760 },
    { name: 'Ireland', chineseName: '愛爾蘭', population: 5255017 },
    { name: 'Croatia', chineseName: '克羅埃西亞', population: 3875325 },
    { name: 'Bosnia and Herzegovina', chineseName: '波士尼亞與赫塞哥維納', population: 3164253 },
    { name: 'Moldova', chineseName: '摩爾多瓦', population: 3034961 },
    { name: 'Lithuania', chineseName: '立陶宛', population: 2859110 },
    { name: 'Albania', chineseName: '阿爾巴尼亞', population: 2791765 },
    { name: 'Slovenia', chineseName: '斯洛維尼亞', population: 2118697 },
    { name: 'Latvia', chineseName: '拉脫維亞', population: 1871871 },
    { name: 'North Macedonia', chineseName: '北馬其頓', population: 1823009 },
    { name: 'Estonia', chineseName: '愛沙尼亞', population: 1360546 },
    { name: 'Luxembourg', chineseName: '盧森堡', population: 673036 },
    { name: 'Montenegro', chineseName: '蒙特內哥羅', population: 638479 },
    { name: 'Malta', chineseName: '馬爾他', population: 539607 },
    { name: 'Iceland', chineseName: '冰島', population: 393396 },
    { name: 'Andorra', chineseName: '安道爾', population: 81938 },
    { name: 'Liechtenstein', chineseName: '列支敦士登', population: 39870 },
    { name: 'Monaco', chineseName: '摩納哥', population: 38631 },
    { name: 'San Marino', chineseName: '聖馬利諾', population: 33581 },
    { name: 'Holy See', chineseName: '梵蒂岡', population: 496 },
    { name: 'Brazil', chineseName: '巴西', population: 211998573 },
    { name: 'Mexico', chineseName: '墨西哥', population: 130861007 },
    { name: 'Colombia', chineseName: '哥倫比亞', population: 52886363 },
    { name: 'Argentina', chineseName: '阿根廷', population: 45696159 },
    { name: 'Peru', chineseName: '秘魯', population: 34217848 },
    { name: 'Venezuela', chineseName: '委內瑞拉', population: 28405543 },
    { name: 'Chile', chineseName: '智利', population: 19764771 },
    { name: 'Guatemala', chineseName: '瓜地馬拉', population: 18406359 },
    { name: 'Ecuador', chineseName: '厄瓜多', population: 18135478 },
    { name: 'Bolivia', chineseName: '玻利維亞', population: 12413315 },
    { name: 'Haiti', chineseName: '海地', population: 11772557 },
    { name: 'Dominican Republic', chineseName: '多明尼加共和國', population: 11427557 },
    { name: 'Cuba', chineseName: '古巴', population: 10979783 },
    { name: 'Honduras', chineseName: '宏都拉斯', population: 10825703 },
    { name: 'Paraguay', chineseName: '巴拉圭', population: 6929153 },
    { name: 'Nicaragua', chineseName: '尼加拉瓜', population: 6916140 },
    { name: 'El Salvador', chineseName: '薩爾瓦多', population: 6338193 },
    { name: 'Costa Rica', chineseName: '哥斯大黎加', population: 5129910 },
    { name: 'Panama', chineseName: '巴拿馬', population: 4515577 },
    { name: 'Uruguay', chineseName: '烏拉圭', population: 3386588 },
    { name: 'Jamaica', chineseName: '牙買加', population: 2839175 },
    { name: 'Trinidad and Tobago', chineseName: '千里達及托巴哥', population: 1507782 },
    { name: 'Guyana', chineseName: '圭亞那', population: 831087 },
    { name: 'Suriname', chineseName: '蘇利南', population: 634431 },
    { name: 'Belize', chineseName: '貝里斯', population: 417072 },
    { name: 'Bahamas', chineseName: '巴哈馬', population: 401283 },
    { name: 'Barbados', chineseName: '巴貝多', population: 282467 },
    { name: 'Saint Lucia', chineseName: '聖露西亞', population: 179744 },
    { name: 'Grenada', chineseName: '格瑞那達', population: 117207 },
    { name: 'St. Vincent & Grenadines', chineseName: '聖文森及格瑞那丁', population: 100616 },
    { name: 'Antigua and Barbuda', chineseName: '安地卡及巴布達', population: 93772 },
    { name: 'Dominica', chineseName: '多米尼克', population: 66205 },
    { name: 'Saint Kitts & Nevis', chineseName: '聖克里斯多福及尼維斯', population: 46843 },
    { name: 'United States', chineseName: '美國', population: 345426571 },
    { name: 'Canada', chineseName: '加拿大', population: 39742430 },
    { name: 'India', chineseName: '印度', population: 1450935791 },
    { name: 'China', chineseName: '中國', population: 1419321278 },
    { name: 'Indonesia', chineseName: '印尼', population: 283487931 },
    { name: 'Pakistan', chineseName: '巴基斯坦', population: 251269164 },
    { name: 'Bangladesh', chineseName: '孟加拉', population: 173562364 },
    { name: 'Japan', chineseName: '日本', population: 123753041 },
    { name: 'Philippines', chineseName: '菲律賓', population: 115843670 },
    { name: 'Vietnam', chineseName: '越南', population: 100987686 },
    { name: 'Iran', chineseName: '伊朗', population: 91567738 },
    { name: 'Turkey', chineseName: '土耳其', population: 87473805 },
    { name: 'Thailand', chineseName: '泰國', population: 71668011 },
    { name: 'Myanmar', chineseName: '緬甸', population: 54500091 },
    { name: 'South Korea', chineseName: '南韓', population: 51717590 },
    { name: 'Iraq', chineseName: '伊拉克', population: 46042015 },
    { name: 'Afghanistan', chineseName: '阿富汗', population: 42647492 },
    { name: 'Yemen', chineseName: '葉門', population: 40583164 },
    { name: 'Uzbekistan', chineseName: '烏茲別克', population: 36361859 },
    { name: 'Malaysia', chineseName: '馬來西亞', population: 35557673 },
    { name: 'Saudi Arabia', chineseName: '沙烏地阿拉伯', population: 33962757 },
    { name: 'Nepal', chineseName: '尼泊爾', population: 29651054 },
    { name: 'North Korea', chineseName: '北韓', population: 26498823 },
    { name: 'Syria', chineseName: '敘利亞', population: 24672760 },
    { name: 'Sri Lanka', chineseName: '斯里蘭卡', population: 23103565 },
    { name: 'Kazakhstan', chineseName: '哈薩克', population: 20592571 },
    { name: 'Cambodia', chineseName: '柬埔寨', population: 17638801 },
    { name: 'Jordan', chineseName: '約旦', population: 11552876 },
    { name: 'United Arab Emirates', chineseName: '阿拉伯聯合大公國', population: 11027129 },
    { name: 'Tajikistan', chineseName: '塔吉克', population: 10590927 },
    { name: 'Azerbaijan', chineseName: '亞塞拜然', population: 10336577 },
    { name: 'Israel', chineseName: '以色列', population: 9387021 },
    { name: 'Laos', chineseName: '寮國', population: 7769819 },
    { name: 'Turkmenistan', chineseName: '土庫曼', population: 7494498 },
    { name: 'Kyrgyzstan', chineseName: '吉爾吉斯', population: 7186009 },
    { name: 'Singapore', chineseName: '新加坡', population: 5832387 },
    { name: 'Lebanon', chineseName: '黎巴嫩', population: 5805962 },
    { name: 'State of Palestine', chineseName: '巴勒斯坦', population: 5495443 },
    { name: 'Oman', chineseName: '阿曼', population: 5281538 },
    { name: 'Kuwait', chineseName: '科威特', population: 4934507 },
    { name: 'Georgia', chineseName: '喬治亞', population: 3807670 },
    { name: 'Mongolia', chineseName: '蒙古', population: 3475540 },
    { name: 'Qatar', chineseName: '卡達', population: 3048423 },
    { name: 'Armenia', chineseName: '亞美尼亞', population: 2973840 },
    { name: 'Bahrain', chineseName: '巴林', population: 1607049 },
    { name: 'Timor-Leste', chineseName: '東帝汶', population: 1400638 },
    { name: 'Cyprus', chineseName: '賽普勒斯', population: 1358282 },
    { name: 'Bhutan', chineseName: '不丹', population: 791524 },
    { name: 'Maldives', chineseName: '馬爾地夫', population: 527799 },
    { name: 'Brunei', chineseName: '汶萊', population: 462721 },
    { name: 'Nigeria', chineseName: '奈及利亞', population: 232679478 },
    { name: 'Ethiopia', chineseName: '衣索比亞', population: 132059767 },
    { name: 'Egypt', chineseName: '埃及', population: 116538258 },
    { name: 'DR Congo', chineseName: '剛果民主共和國', population: 109276265 },
    { name: 'Tanzania', chineseName: '坦尚尼亞', population: 68560157 },
    { name: 'South Africa', chineseName: '南非', population: 64007187 },
    { name: 'Kenya', chineseName: '肯亞', population: 56432944 },
    { name: 'Sudan', chineseName: '蘇丹', population: 50448963 },
    { name: 'Uganda', chineseName: '烏干達', population: 50015092 },
    { name: 'Algeria', chineseName: '阿爾及利亞', population: 46814308 },
    { name: 'Morocco', chineseName: '摩洛哥', population: 38081173 },
    { name: 'Angola', chineseName: '安哥拉', population: 37885849 },
    { name: 'Mozambique', chineseName: '莫桑比克', population: 34631766 },
    { name: 'Ghana', chineseName: '迦納', population: 34427414 },
    { name: 'Madagascar', chineseName: '馬達加斯加', population: 31964956 },
    { name: 'Côte d\'Ivoire', chineseName: '象牙海岸', population: 31934230 },
    { name: 'Cameroon', chineseName: '喀麥隆', population: 29123744 },
    { name: 'Niger', chineseName: '尼日', population: 27032412 },
    { name: 'Mali', chineseName: '馬里', population: 24478595 },
    { name: 'Burkina Faso', chineseName: '布基納法索', population: 23548781 },
    { name: 'Malawi', chineseName: '馬拉威', population: 21655286 },
    { name: 'Zambia', chineseName: '尚比亞', population: 21314956 },
    { name: 'Chad', chineseName: '查德', population: 20299123 },
    { name: 'Somalia', chineseName: '索馬利亞', population: 19009151 },
    { name: 'Senegal', chineseName: '塞內加爾', population: 18501984 },
    { name: 'Zimbabwe', chineseName: '辛巴威', population: 16634373 },
    { name: 'Guinea', chineseName: '幾內亞', population: 14754785 },
    { name: 'Benin', chineseName: '貝南', population: 14462724 },
    { name: 'Rwanda', chineseName: '盧旺達', population: 14256567 },
    { name: 'Burundi', chineseName: '蒲隆地', population: 14047786 },
    { name: 'Tunisia', chineseName: '突尼西亞', population: 12277109 },
    { name: 'South Sudan', chineseName: '南蘇丹', population: 11943408 },
    { name: 'Togo', chineseName: '多哥', population: 9515236 },
    { name: 'Sierra Leone', chineseName: '獅子山', population: 8642022 },
    { name: 'Libya', chineseName: '利比亞', population: 7381023 },
    { name: 'Congo', chineseName: '剛果', population: 6332961 },
    { name: 'Liberia', chineseName: '賴比瑞亞', population: 5612817 },
    { name: 'Central African Republic', chineseName: '中非共和國', population: 5330690 },
    { name: 'Mauritania', chineseName: '毛里塔尼亞', population: 5169395 },
    { name: 'Eritrea', chineseName: '厄立特里亞', population: 3535603 },
    { name: 'Namibia', chineseName: '納米比亞', population: 3030131 },
    { name: 'Gambia', chineseName: '甘比亞', population: 2759988 },
    { name: 'Gabon', chineseName: '加彭', population: 2538952 },
    { name: 'Botswana', chineseName: '博茨瓦納', population: 2521139 },
    { name: 'Lesotho', chineseName: '萊索托', population: 2337423 },
    { name: 'Guinea-Bissau', chineseName: '幾內亞比索', population: 2201352 },
    { name: 'Equatorial Guinea', chineseName: '赤道幾內亞', population: 1892516 },
    { name: 'Mauritius', chineseName: '模里西斯', population: 1271169 },
    { name: 'Eswatini', chineseName: '斯威士蘭', population: 1242822 },
    { name: 'Djibouti', chineseName: '吉布提', population: 1168722 },
    { name: 'Comoros', chineseName: '科摩羅', population: 866628 },
    { name: 'Cabo Verde', chineseName: '佛得角', population: 524877 },
    { name: 'Sao Tome & Principe', chineseName: '聖多美和普林西比', population: 235536 },
    { name: 'Seychelles', chineseName: '塞舌爾', population: 130418 },
    { name: 'Taiwan', chineseName: '台灣', population: 23213962 },
    { name: 'Hong Kong', chineseName: '香港', population: 7414909 },
    { name: 'Macao', chineseName: '澳門', population: 720262 }
];

export async function getCountryData(count) {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();

        // Filter out countries with missing or zero population
        const validCountries = countries
            .filter(country => 
                country.population && 
                country.population > 0 && 
                country.name.common &&
                country.translations.zht // Ensure Traditional Chinese translation exists
            )
            .map(country => ({
                name: country.name.common,
                chineseName: country.translations.zht.common,
                population: country.population
            }));

        // Combine API countries with custom country data
        const allValidCountries = [...validCountries, ...customCountryData.filter(
            country => !validCountries.some(c => c.name === country.name)
        )];

        // Randomly select specified number of countries
        const selectedCountries = [];
        while (selectedCountries.length < count) {
            const randomCountry = allValidCountries[Math.floor(Math.random() * allValidCountries.length)];
            if (!selectedCountries.some(c => c.name === randomCountry.name)) {
                selectedCountries.push(randomCountry);
            }
        }

        return selectedCountries;
    } catch (error) {
        console.error('Error fetching country data:', error);
        
        // Fall back to custom country data if API fetch fails
        const selectedCountries = [];
        while (selectedCountries.length < count) {
            const randomCountry = customCountryData[Math.floor(Math.random() * customCountryData.length)];
            if (!selectedCountries.some(c => c.name === randomCountry.name)) {
                selectedCountries.push(randomCountry);
            }
        }

        return selectedCountries;
    }
}