import React,{useState} from 'react';
import axios from 'axios';
import {TextareaAutosize, Typography,Button,Tooltip,CircularProgress,Box,Input,Checkbox } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import {Publish,Delete} from '@material-ui/icons';
import {notify} from  '../helperJs/reactTostify'
import { ToastContainer } from 'react-toastify';
import {useStyles} from "./Panel.Style/Page.style";
import HeadContent from './Panel Help C/HeadContent'
import FormInput from './Panel Help C/FormInput'
const MYTooltipe = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f2f7ff',
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[2],
    fontSize: 11,
  },
}))(Tooltip);

const SpellC = () => {
        const [inputValue,setInputValue] = useState("سلم علیکم حتما آن ها الزم استکه مومن را احترام مے ڪنند. یگ پنجره ی بزگ وسبز باز میشود . !حضور تان را کرامی می داشتم")
        const [result,setResult] = useState([])
        const [textH,setTextH] = useState(false)
        const [error,setError] = useState(false)
        const [checked,setChecked] = useState(true)
        const [checkedOne,setCheckedOne] = useState(true)
        const [checkedTwo,setCheckedTwo] = useState(true)
        const [suggesWord,setSuggesword] = useState(3)
        let baseUrl = "http://api.text-mining.ir/api/"
        const clickHandler = ()=>{
                if(inputValue.length>0){
                        setTextH(true)
                        axios.get(baseUrl+'Token/GetToken?apikey=fa6141a9-2ca2-ec11-80f6-98ded002619b')
                        
                        .then((response) =>{
                         
                          let myHeaders = new Headers();
                          myHeaders.append("Authorization", "Bearer "+ response.data.token);
                          myHeaders.append("Content-Type", "application/json");
                          
                          let raw = JSON.stringify({
                                "Text": inputValue,     
                                "ReturnOnlyChangedTokens": false, // فقط توکن‌هایی که برای آنها اصلاحات پیشنهادی وجود دارد در خروجی برگردانده شوند
                                "WordConfiguration": { //تنظیمات مربوط به جایگزین نمودن واژه‌ها
                                "StickingCompoundWords": true, 
                                "SplitMultiJoinedWords": checkedOne,
                                "SplitVaBeJoinedWords": true,
                                "HighSensitiveRefinement": false,
                                "AlternativeWordSuggestion": true
                                },
                                "CharConfiguration": {
                                "LetterNormalization": true,
                                "DigitNormalization": true,
                                "PunctuationNormalization": true,
                                "SpaceNormalization": true,
                                "ErabNormalization": checkedTwo,
                                "RemoveExtraSpace": true,
                                "RemoveExtraHalfSpace": true,
                                "ConvertHeHamzeToHeYe": true,
                                "ConvertHeYeToHeHamze": false
                                },
                                "WritingRuleConfiguration": {
                                "PrefixCorrection": true,
                                "SuffixCorrection": true,
                                "MorphologicalAnalysis": true,
                                "TanvinCorrection": true,
                                "HamzeCorrection": true,
                                "SpaceBetweenPuncCorrection": true
                                },
                                "SpellConfiguration": {
                                "CorpusType": "General",
                                "LexicalSpellCheckSuggestionCount": suggesWord,
                                "LexicalSpellCheckerDistanceThreshold": 4,
                                "LexicalSpellCheckHighSensitive": false,
                                "RealWordAlternativeSuggestionCount": 2,
                                "ContextSpellCheckHighSensitive": false
                                },
                                "IgnoreQuotes": false,
                                "IgnoreWordsWithErab": true,
                                "SpellCheckerCandidateCount": 3,
                                "RealWordAlternativeCount": 2,
                                "ContextSpellCheckHighSensitive": checked,
                                "LexicalSpellCheckHighSensitive": false,
                                "CorpusType": "General"
                                });
                        
                          
                          let requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: raw,
                            redirect: 'follow'
                          };
                          
                 fetch("https://api.text-mining.ir/api/Virastar/ScanText", requestOptions)
                .then(response => response.text())
                .then(data => {
                        setResult(JSON.parse(data))
                        setTextH(false)
                })
                            .catch(error => {
                                setError(true)
                            });
                        })     
                }
                else{
                    notify('متن یادت رفت 🙂','info')
                }
             
        }
        const changeHandler = (e)=>{
                setInputValue(e.target.value)
        }
        const onDelHandler = ()=>{
                setInputValue('')
        }
        const suggesWordHandler= (e)=>{
                setSuggesword(e.target.value)
        }
        const checkedHandler = (e)=>{
                setChecked(e.target.checked)
               
        }
        const checkedHandlerOne = (e)=>{
                setCheckedOne(e.target.checked)
               
        }
        const checkedHandlerTwo = (e)=>{
                setCheckedTwo(e.target.checked)
        }
     
        const classes = useStyles()
return (
<section>
        <section className={classes.container}>
                <div className={classes.contentWrapper}>
                        <HeadContent 
                          headText='ویراستار متن'
                dis='بررسی و ویراستاری متن ورودی و پیشنهاد اصلاحات مربوط به نویسه‌ها، فاصله و نیم‌فاصله‌ها، جایگزینی طبق دستور زبان و آیین‌نامه مصوب فرهنگستان و همچنین غلط‌یاب املائی و اشتباهات از نوع کلمه واقعی و ... در متن فارسی'
                        />
                        <form className={classes.formWrapper}>
                        <label htmlFor="TextareaAutosize" className={classes.labelArea}>متن ورودی : </label>
                        <TextareaAutosize onChange={changeHandler}  value={inputValue} className={classes.mytextarea} 
                        name="textAnalysis" id="" maxRows={10} aria-label="minimum height" minRows={3}
                                placeholder="متن رو بزار اینجا 😉✍
                                                        "/>
                                                        
                        </form>
                        <FormInput
                                          label="تعداد پیشنهادات (بین ۱ تا ۵) :">
                                                <Input type="number" className={classes.formInput2} value={suggesWord} onChange={suggesWordHandler} placeholder="تعداد کلماتی که جایگزین کلمات اشتباه می‌شوند" inputProps={{ 'aria-label': 'description' }} />
                                          </FormInput>
                        <div className={classes.checkBoxWrapper}>
                        <label htmlFor="checkBox">جداسازی واژه‌های به هم چسبیده :</label>
                        <Checkbox
                                color="primary"
                                checked={checkedOne}
                                onChange={checkedHandlerOne}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        </div>
                        <div className={classes.checkBoxWrapper}>
                        <label htmlFor="checkBox">استانداردسازی یونیکدهای مختلف حرکت‌گذاری (اعراب، تنوین، ساکن، تشدید و ...) :</label>
                        <Checkbox
                                color="primary"
                                checked={checkedTwo}
                                onChange={checkedHandlerTwo}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        </div>
                        <div className={classes.checkBoxWrapper}>
                        <label htmlFor="checkBox">غلط‌یابی معنایی با حساسیت بالا انجام شود ( گزارش موارد مشکوک به اشتباه ) :</label>
                        <Checkbox
                                color="primary"
                                checked={checked}
                                onChange={checkedHandler}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        </div>
                        
                <div className={classes.btnWrpper}>
                        <Button onClick={onDelHandler} variant="contained" color="secondary" endIcon={<Delete/>} className={classes.wrpbtn}>
                        <span className={classes.btnText}> پاک کردن</span>
                        </Button>
                        <Button onClick={clickHandler}  variant="contained" color="primary" endIcon={<Publish/>} className={classes.wrpbtn}>
                                <span className={classes.btnText}>ارسال</span>
                        </Button>
                        </div>
                        <div className={classes.resultWrapper}>
                        {textH ?
                        
                        <Box sx={{
                                display: 'flex'
                                 ,justifyContent: 'center',
                                 alignItems: 'center',
                                
                                 }}>
                                <CircularProgress color="secondary" size={70} />
                        </Box>
                        :
                        result.map((item) =>{
                        return (
                                <MYTooltipe arrow  key={item.CharIndex} title={
                                        <React.Fragment>
                                        {item.OriginalText === item.NewText ? 
                                        <span>
                                                👍
                                        </span>

                                                                :
                                                <span className={classes.wrongText}>
                                                        {
                                                        2 > item.EditList.length > 0 ?
                                                        item.EditList.map((data,i) => {
                                                                        return <div key={i}>
                                                                                <Typography  className={classes.suggestedText} variant='h6' color='primary'>
                                                                                {data.SuggestedText}
                                                                                </Typography>
                                                                                <p className={classes.description} >{data.Description} </p>
                                                                        </div>
                                                        })      :
                                                        <div>
                                                                <h4>چند پیشنهاد وجود دارد : </h4>
                                                                {
                                                                        item.EditList.map((data,i) => {
                                                                                return <div key={i} >
                                                                                        <Typography variant='h6' color='primary' className={classes.suggestedText2}>
                                                                                                        {data.SuggestedText}
                                                                                        </Typography> 
                                                                                         <p className={classes.description}>
                                                                                                        {data.Description}       
                                                                                        </p>
                                                                                </div>
                                                                                }) 
                                                                }
                                                        </div>

                                                }
                                                </span>
                                }
                                        
                                                        
                                                        
                                        </React.Fragment>
                                }>
                                        <span> {item.OriginalText === item.NewText ?
                                                <span>{item.OriginalText}</span>
                                        : 
                                        <span className={classes.orginalColor}>{item.OriginalText}</span>
                                        
                                        }</span>
                                        
                                        </MYTooltipe>
                        )
                                        })
                                }
                </div>
                
                <span className={classes.erorrW}> {error && 'سیستم در حال بروزرسانی می باشد'} </span>
                </div>
        
</section>
<ToastContainer rtl />
</section>
);
};

export default SpellC;
      
     