import { useState,useEffect } from 'react'
import Description from './components/Description/Description'
import FeedBack from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import './App.css'

function App() {
  const [options, setOptions] = useState(() => {
    // Anahtar ile değeri okuyoruz
    const savedOptions = window.localStorage.getItem("options");
  
    // Eğer burada bir değer varsa, ayrıştırıyor ve
    // bunu durumun başlangıç değeri olarak döndürüyoruz
    if (savedOptions !== null) {
      try {
        return JSON.parse(savedOptions);  // JSON parse hatası için try-catch kullanıyoruz
      } catch (error) {
        console.error("localStorage verisi geçersiz:", error);
        return { good: 0, neutral: 0, bad: 0 }; // Hata durumunda varsayılan değer döner
      }
    }
    
    return { good: 0, neutral: 0, bad: 0 };  // Varsayılan değer
  });
  
  useEffect(() => {
    // options durumu değiştiğinde localStorage'a kaydediyoruz
    window.localStorage.setItem("options", JSON.stringify(options));
  }, [options]);  // options'a bağlı olarak tetiklenir


 const updateFeedback=(feedbackType)=> {
  switch (feedbackType) {
    case "good":     
      setOptions({...options,good:options.good+1});      
      break;
    case "neutral":     
      setOptions({...options,neutral:options.neutral+1});
      break;
    case "bad":      
      setOptions({...options,bad:options.bad+1});
      break;
    case "reset":     
      setOptions({good:0, neutral:0 , bad:0});
      break;
  }};
 const totalFeedback = options.good + options.neutral + options.bad;
 

  return (
    <>
    <Description />
    <Options  updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
    {totalFeedback>0 ?<FeedBack options={options} totalFeedback={totalFeedback} /> : <Notification />}
    
    </>
  )
}

export default App
