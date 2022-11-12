import React,{useState, useRef} from 'react'

function RefsExamples() {
    const [showMsgOne, setShowMsgOne] = useState(false);
    const [showMsgTwo, setShowMsgTwo] = useState(false);

    const counter = useRef(0); //  كنا حاطين هون let counter = 0;
                               // هاد الاشي عمل مشكله لما يوصل العداد 5 بدو يدخل على الشرط الي ب سطر 11 و و يطبق ال 
                               //       هيك حفظ القيمه الي وصللها العداد   useRefلهيك لجانا ل   setShowMsgOne(true);

     function onPlayStart(){
        counter.current++;
        if (counter.current == 5){
            setShowMsgOne(true);
        }else if (counter.current==8){
            setShowMsgTwo(true);
        }else if (counter.current>8){
            setShowMsgOne(false);
            setShowMsgTwo(false);
        }
    }
  return (
    <div>
        <div>
            <button onClick={onPlayStart}>Let's Play</button>
        </div>

        {showMsgOne?
         <div>You win</div>
        :null}

        {showMsgTwo? 
        <div>Congratulation!</div>
        :null }

       
        

    </div>
  )
}

export default RefsExamples