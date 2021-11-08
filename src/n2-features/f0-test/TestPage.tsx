import React, {ChangeEvent, useState} from 'react';
import s from './testPage.module.css'
import SuperButton from './c2-SuperButton/SuperButton';
import SuperInputText from './c1-SuperInputText/SuperInputText';
import SuperCheckbox from './c3-SuperCheckbox/SuperCheckbox';
import SuperSelect from './c5-SuperSelect/SuperSelect';
import SuperRange from './c7-SuperRange/SuperRange';
import SuperDoubleRange from './c8-SuperDoubleRange/SuperDoubleRange';

export const TestPage =() => {



    return (
        <div className={s.column}>
            <SuperButton>
                Button
            </SuperButton>
            <SuperInputText
            className={s.blue}/>
            <SuperCheckbox/>
            <SuperSelect/>
            <SuperRange/>
            {/*<SuperDoubleRange/>*/}
        </div>
    )
}