async function Translate_DeepL(text,target_lang) {

    //See how the API works at https://www.deepl.com/docs-api/simulator 
    
    var api_key = encodeURI("DeepL API KEY");

    //Language of the translated text
    var source_lang = "ja";
    
    var base_url = "https://api-free.deepl.com/v2/translate?auth_key=" + api_key + "&source_lang=" + source_lang + "&target_lang="+target_lang +"&text=";
    var encode_text = encodeURI(text);
  
    var response = await UrlFetchApp.fetch(base_url+encode_text);
    var ret_text = JSON.parse(response.getContentText());
    
    console.log(ret_text.translations[0].text);
    
    return(ret_text.translations[0].text);
  
  }