//セレクトボタンのIDを列挙
const textselectID = [
    "その他地点",
    "アカデミー施設・その他建物-文字",
    "自力建設-文字",
    "演習林-林分ラベル",
    "施設案内塔",
    "サインポール",
    "試験地-文字",
    "アカデミー危険木調査結果(H25)",
    "OWL-立木データ-文字",
    "フェノロジー調査2020-植物",
    "フェノロジー調査2020-昆虫",
    "フェノロジー調査2020-哺乳類",
    "フェノロジー調査2020-鳥類",
    "フェノロジー調査2020-菌類",
    "フェノロジー調査2020-爬虫類",
    "フェノロジー調査2020-魚類",
    "フェノロジー調査2020-両生類",
    "フェノロジー調査2020-多足類",
    "フェノロジー調査2020-地衣類",
    "フェノロジー調査2020-コケ",
    "フェノロジー調査2020-シダ植物",
    "フェノロジー調査2020-虫こぶ",
    "翔楓祭2021企画",
    "古城山国有林-林分ラベル",
    "美濃市指定避難場所",
    "美濃市指定緊急避難場所",
    "等高線-標高ラベル",
    "標高点",
    "岐阜県鳥獣保護区等(H30)-文字",
    "岐阜県20万分の1表層地質-文字",
    "岐阜県20万分の1土壌分類-文字",
];

  //セレクトボタンを追加
for (const id of textselectID) {

    if (document.getElementById(id)) {
        continue;
    }

    const option = document.createElement("option");
    option.id = id;
    option.text = id;
    const select = document.getElementById("property_text");
    select.appendChild(option);
}

//文字の色の変更
document.querySelector("#selectcolor_text").addEventListener('input',(event)=>{
    var layer = document.getElementById('property_text');
    var colorval = event.target.value;
    map.setPaintProperty(layer.value, 'text-color', colorval);
});

//文字の縁の色の変更
document.querySelector("#selectcolor_texthalo").addEventListener('input',(event)=>{
    var layer = document.getElementById('property_text');
    var colorval = event.target.value;
    map.setPaintProperty(layer.value, 'text-halo-color', colorval);
});

//文字のサイズ変更
slider_text_size.addEventListener('input', (e) => {
    const sliderValue = document.getElementById('slider_text_size_value');
    map.setLayoutProperty(
        property_text.value,
        'text-size',
        parseInt(e.target.value, 10) / 100
    );
    sliderValue.textContent = e.target.value / 100
});

//文字の縁の幅変更
slider_text_halowidth.addEventListener('input', (e) => {
    const sliderValue = document.getElementById('slider_text_halowidth_value');
    map.setPaintProperty(
        property_text.value,
        'text-halo-width',
        parseInt(e.target.value, 10) / 100
    );
    sliderValue.textContent = e.target.value / 100
});

//文字の不透明度変更
slider_text_opacity.addEventListener('input', (e) => {
    const sliderValue = document.getElementById('slider_text_opacity_value');
    map.setPaintProperty(
        property_text.value,
        'text-opacity',
        parseInt(e.target.value, 10) / 100
    );
    sliderValue.textContent = e.target.value + '%'
});

function CangeText(){
    const layer = document.getElementById('property_text');
    
    const nowtcolor = map.getPaintProperty(layer.value, 'text-color',);
    document.getElementById( "selectcolor_text" ).value = nowtcolor;

    const nowthcolor = map.getPaintProperty(layer.value, 'text-halo-color',);
    document.getElementById( "selectcolor_texthalo" ).value = nowthcolor;

    const nowsize = map.getLayoutProperty(layer.value, 'text-size',) * 100;
    const sliderValueS = document.getElementById('slider_text_size_value');
    document.getElementById( "slider_text_size" ).value = Math.trunc(nowsize);
    sliderValueS.textContent = Math.trunc(nowsize) / 100;

    const nowb = map.getPaintProperty(layer.value, 'text-halo-width',) * 100;
    const sliderValueH = document.getElementById('slider_text_halowidth_value');
    document.getElementById( "slider_text_halowidth" ).value = Math.trunc(nowb);
    sliderValueH.textContent = Math.trunc(nowb) / 100;

    const sliderValueO = document.getElementById('slider_text_opacity_value');
    const nowopacity = map.getPaintProperty(layer.value, 'text-opacity',) * 100;
    document.getElementById( "slider_text_opacity" ).value = Math.trunc(nowopacity);
    sliderValueO.textContent = Math.trunc(nowopacity) + '%';
    }