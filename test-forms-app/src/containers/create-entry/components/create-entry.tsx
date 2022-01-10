import React,{useState} from 'react';
import {Entry} from '../modals/entry-modals';

const CreateEntryComponent = (props: any) =>{
    const[entry, setEntry] = useState <Entry>({id: "",
        month: "",
        date: new Date(),
        dpmAmt: 0,
        sivagiriAmt: 0,
        bankInterest: 0,
        stockAmt: 0,
        totalAmt: 0})

        const save = ()=>{
            console.log('save Data :', entry);
        }
    return(
        <div>
            Create Entry
            <div>
                <input type="text" value={entry.month} onChange={(e)=>{setEntry({...entry, month:e.target.value})}}  placeholder='Month'/>
                <input type="number" value={entry.dpmAmt} onChange={(e)=>{setEntry({...entry, dpmAmt: parseInt(e.target.value)})}} placeholder='DPM and Muhavoor Amt'/>
                <input type="number" value={entry.sivagiriAmt} onChange={(e)=>{setEntry({...entry, month:e.target.value})}} placeholder='Sivagirir Amt'/>
                <input type="number" value={entry.bankInterest} onChange={(e)=>{setEntry({...entry, month:e.target.value})}} placeholder='Bank Loan Amt' />
                <input type="number" value={entry.stockAmt} onChange={(e)=>{setEntry({...entry, month:e.target.value})}} placeholder='Stock Amt' />
                <input type="number" value={entry.totalAmt} onChange={(e)=>{setEntry({...entry, month:e.target.value})}} placeholder='Total Amt' />
            </div>

            <button onClick={()=>{save()}}>Save</button>
        </div>
    )
}

export default CreateEntryComponent;