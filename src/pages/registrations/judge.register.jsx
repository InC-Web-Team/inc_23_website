import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Buttons, Checkboxes, FormsBanner, InputBox, NoteBox, RadioButtons, toast } from '../../components';
import { useRegisterJudge } from '../../hooks/judge.hooks';
import { slots, projectDomains } from '../../static/data';
//import '../styles/OtpInput.css'
// import  OtpInput  from './otpField';

const initialErrors = {
    name: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    exp: '',
    events: '',
    domains: '',
    slots: '',
    min_projects: '',
    isPICT: '',
    referral: '',
}



function JudgeForm() {

    const [errors, setErrors] = useState(initialErrors)
    const [judge, setJudge] = useState({
        'events': [],
        'name': '',
        'email': '',
        'phone': '',
        'residential_address': '',
        'commercial_address': '',
        'company': '',
        'exp': '',
        // 'events': [eventName],
        'domains': [],
        'slots': [],
        'min_projects': '3',
        'isPICT': '',
        'referral': '',
        // 'Verify': ''
    })

    const registerJudgeMutation = useRegisterJudge(setErrors, judge.events)

    const onSuccessNavigator = useNavigate()
    // const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        // console.log(name, value);
        setJudge(prevState => {
            errors[name] !== '' && setErrors(prevState => ({ ...prevState, [name]: '' }))
            return { ...prevState, [name]: value }
        });
    }


    const eventNames = [
        {
            value: "impetus",
            label: "Impetus"
        },
        {
            value: "concepts",
            label: "Concepts"
        },
    ];
    const isPICT = [
        {
            value: "1",
            label: "Yes"
        },
        {
            value: "0",
            label: "No"
        },
    ];

    function handleSubmit(e) {
        e.preventDefault();
        let hasEmptyField = false;
        for (const key in judge) {
            if (key === "referral" && judge[key] === "") {
                continue; // If referral is empty, continue to the next field
            }
            if (judge[key] === "") {
                hasEmptyField = true;
                break; // If any other field is empty, set hasEmptyField to true and break the loop
            }
        }
    
        if (hasEmptyField) {
            toast.warn("Please enter all fields");
            return;
        }
    
        console.log("done");
        registerJudgeMutation.mutate(judge, {
            onSuccess: (res) => {
                setErrors(initialErrors);
                toast.success('Successfully Registered!', { icon: '💐' });
                setTimeout(() => {
                    onSuccessNavigator('/auth');
                }, 2000);
            },
        });
    }
    

    console.log(judge)
    return (
        <>
            <FormsBanner eventName={`JUDGES REGISTRATION `} eventDescription="Register to join us to make InC'24 a grand success!" />
            <div className='mx-10 my-7 md:mx-20 placeholder:'>
                <form onSubmit={handleSubmit} className='shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl items-center p-4 md:p-8 border border-light_blue w-full'>
                    <NoteBox title='Note' text='This registration form is to be filled by the judges only for judging the Impetus and Concepts event.' />
                    <RadioButtons
                        label="Select an Event"
                        options={eventNames}
                        state={judge}
                        setState={setJudge}
                        name="events"
                        required
                    />
                    <InputBox label='Name' type='text' name='name' value={judge.name} placeholder='Enter Full Name' onChange={handleInputChange} error={errors.name} required />
                    <div className='relative flex justify-center items-center space-x-8'>
                        <InputBox label='Email' type='email' name='email' value={judge.email} placeholder='Enter Email' onChange={handleInputChange} error={errors.email} required />
                        {judge.Verify === 'verify'}
                    </div>

                    <>
                        <InputBox label='Phone' type='tel' name='phone' value={judge.phone} placeholder='Enter Phone Number' onChange={handleInputChange} error={errors.phone} required />

                        <InputBox label='Company/Organization' type='text' name='company' value={judge.company} placeholder='Enter Company Name' onChange={handleInputChange} error={errors.company} required />
                        <InputBox label='Company Address/Organization Address' type='text' name='commercial_address' value={judge.commercial_address} placeholder='Enter Company Address' onChange={handleInputChange} error={errors.commercial_address} required />

                        <InputBox label='Residential Address' type='text' name='residential_address' value={judge.residential_address} placeholder='Enter Residential Address' onChange={handleInputChange} error={errors.commercial_address} required/>



                        <InputBox label='Industry Experience (In Years)' type='number' name='exp' value={judge.exp} placeholder='Enter Industry Experience' min={0} onChange={handleInputChange} error={errors.exp} required />
                        <Checkboxes label='Select Domain(s) for Judging' name='domains' state={judge} setState={setJudge} options={projectDomains} error={errors.domains} required />
                        <Checkboxes label='Select Slot(s) (tentative)' name='slots' state={judge} setState={setJudge} options={slots} error={errors.slots} required />
                        <InputBox label='Minimum Number of Projects want to Judge' type='number' name='min_projects' value={judge.min_projects} placeholder='Enter Minimum Number of Projects' min={3} max={10} onChange={handleInputChange} error={errors.min_projects} required />

                        {/* <InputBox label='Password' type='password' name='password' placeholder='Enter Password' onChange={handleInputChange} required />
                        <InputBox label='Confirm Password' type='password' name='confirm_password' placeholder='Confirm Password' onChange={handleInputChange} required /> */}
                        <RadioButtons
                            label="Are you a PICT Alumini ?"
                            options={isPICT}
                            state={judge}
                            setState={setJudge}
                            name="isPICT"
                            required
                        // error={errors2.isPICT}
                        />
                        <InputBox label='Referred By' type='text' name='referral' value={judge.referral} placeholder="Enter Referral's Name (if any)" onChange={handleInputChange} error={errors.referral} />
                        <Buttons value='Submit' type='submit' onClick={handleSubmit} loading={registerJudgeMutation.isLoading} />

                    </>
                </form>
            </div>
        </>
    );
}
export default JudgeForm;