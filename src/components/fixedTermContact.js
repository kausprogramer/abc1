import { useCollapse } from 'react-collapsed'
import './collapse.css';
import React , { useState } from 'react';
import { db } from '../firebase';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';


function FixedTermContact(props){

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [values, setValues] = useState({
        name: "",
        IN: "",
        date1:"",
        date2:"",
        name2:"",
        IN2:"",
        date3:"",
        name3:""
      });
      const CollectionRef = collection(db, "fixedTermContact")
    const addFile= (newVal)=>{
        return addDoc(CollectionRef, newVal);

    }
      const submitHandle= async()=>{
        const name = values.name;
        const IN = values.IN;
        const startDate = values.date1;
        const endDate = values.date2;
        const fillDate = values.date3;
        const newVal={
            name,
            IN,
            startDate,
            endDate,
            fillDate    
        };
        await addFile(newVal);

      }

  return (

<div style={{border:'2px', borderColor:'black',padding:'2px', overflow:'hidden'}}>
<div className="collapsible" >
        <div className="header"  {...getToggleProps()}>
            <p>
            FixedTermContact
            </p>
            <p>
            {isExpanded ? '-' : '+'}
            </p>
        </div>
        <div style={{borderWidth:2}} {...getCollapseProps()}>
            <div className="content">
                
                <h5>PRIVATE AND CONFIDENTIAL</h5>
                <form onSubmit={submitHandle}>
                <p>Name and Surname: <input type="text" name="name" 
                onChange={(event)=>setValues((prev)=> ({...prev, name: event.target.value}))}
                /></p>
                <p>Identity Number: <input type="text" name="IN1" 
                onChange={(event)=>setValues((prev)=> ({...prev, IN1: event.target.value}))}
                /></p>
                <h5>LETTER OF APPOINTMENT CONSTITUTING AN EMPLOYMENT AGREEMENT ONCE SIGNED</h5>
                <p>We have pleasure in confirming your appointment as a Field Sales Representative within Affordable Benefits Company Pty (Ltd) (hereafter “ABC”). This contract will commence on: <input type='text' name=''
                onChange={(event)=>setValues((prev)=> ({...prev, date1: event.target.value}))}
                /> for a fixed term of three consecutive months and will terminate on:  <input type='text' name=''
                onChange={(event)=>setValues((prev)=> ({...prev, date2: event.target.value}))}
                /> based on the Terms and Conditions of employment listed below:</p>
                <ol>
                    <li><h5><u>Duties</u></h5>
                    <ol>
                        <li><p>You will be reporting to your designed Team Leader / Sales Manager and will be expected to perform the minimum duties and meet such performance criteria as detailed in the attached Remuneration Annexure.</p></li>
                        <li><p>Due to the nature of your appointment, you acknowledge and agree that you may be required to undertake duties and responsibilities which fall outside of those duties and responsibilities as contained in this employment agreement or any Annexure hereto.</p></li>
                        <li><p>You undertake:</p>
                        <ol>
                            <li>
                            <p>to diligently perform all such duties and exercise such powers consistent with the position to which you are appointed;</p>
                            </li>
                            <li>
                                <p>to carry out to the best of your ability and under the control of ABC, such duties and functions as may reasonably be assigned to you from time to time by ABC by any person delegated by ABC for such purpose;</p>
                            </li>
                            <li>
                                <p>to devote your full time, attention, skill and abilities to the affairs of ABC and promotion of the business, interests and welfare of ABC;</p>
                            </li>
                            <li>
                                <p>to obey and observe all lawful regulations and reasonable instructions issued by ABC;</p>
                            </li>
                            <li>
                                <p>not to devote any time or attention to any other concern or business not related to the business of ABC without the prior written consent of an ABC Executive, which consent shall not be unreasonably withheld;</p>
                            </li>
                            <li>
                                <p>to exercise the utmost good faith towards ABC both in carrying out your duties hereunder and also in all your dealings with ABC and to make full disclosure of any other interest that could, in the widest sense, create or result in any possible conflict of interest between you and ABC;</p>
                            </li>
                            <li>
                                <p>that you shall at all times be answerable to such person appointed by ABC as you Team Leader and/or Manager; and</p>
                            </li>
                            <li>
                                <p>not to engage in any activities that would detract from the proper performance of your obligations hereunder nor to be engaged in any other kind of business in competition with or conflicting with the business of ABC.</p>
                            </li>
                        </ol>
                        </li>
                    </ol>
                    </li>
                    <li><h5><u>Remuneration</u></h5>
                    <ol>
                        <li>
                            <p>You shall be remunerated for your employment services monthly in arrears, on or before the last working day of each month, in accordance with the attached Remuneration Annexure.</p>
                        </li>
                        <li>
                            <p>You authorise ABC to deduct from your monthly salary all deductions as may be required by law (e.g. Pay-As-You-Earn tax) or as are mutually agreed to between yourself and ABC from time-to-time.</p>
                        </li>
                        <li>
                            <p>In the event of your absence from work for any reason other than authorised sick leave, authorised family responsibility leave, authorised annual leave or any other authorised leave, ABC will not remunerate your for such days as you may be absent from work.</p>
                        </li>
                    </ol>
                    </li>
                    <li>
                        <h5>Location of employment</h5>
                        <p>You are employed in the capacity of a Field Sales Representative, and you are accordingly not assigned to a set place of work, but instead required to travel to different designated client premises and/or locations (as may be directed by ABC on behalf of ABC from time to time).</p>
                    </li>
                    <li>
                        <h5>Limitation of authority</h5>
                        <ol>
                        <li>
                            <p>You are not entitled, without the prior written consent of ABC, to:</p>
                            <ol>
                                <li>
                                <p>enter into any agreements for and on behalf of ABC with any third party whomsoever, whether natural or juristic;</p>
                                </li>
                                <li>
                                    <p>waive any rights of ABC;</p>
                                </li>
                                <li>
                                    <p>make any endorsement or alteration on any policy document or and other product of whatsoever nature generated by ABC;</p>
                                </li>
                                <li>
                                    <p>give any guarantee relating to the policies or products of ABC;</p>
                                </li>
                                <li><p>in any manner whatsoever bind or purport to bind ABC; or</p></li>
                                <li>
                                    <p>act in any capacity whatsoever without written permission from the ABC HR executive.</p>
                                </li>
                            </ol>
                            <li>
                                <p>Subject to any relevant legislation and/or regulation and in the event that you are found guilty of an offence which caused ABC to suffer any expense, loss or damages of whatsoever nature, you agree to ABC automatically deducting the same from your relevant monthly remuneration.</p>
                            </li>
                            <li>
                                <p>For the purposes of this clause, reference to ABC shall include any other person, whether natural or juristic, for whom ABC acts or with whom ABC is associated.</p>
                            </li>
                        </li>
                        </ol>
                    </li>
                    <li>
                        <h5><u>Financial Advisory and Intermediary Services Act</u></h5>
                        <ol>
                            <li>
                            <p>As per the latest requirements imposed by the Fit and Proper determinations issued under the Financial Advisory and Intermediary Services Act, 37 of 2002 (“FAIS”), your employment role, as a Field Sales Representative, within ABC means that you must be registered as a FAIS representative for execution of scripted sales only, and that you must at all times throughout your employment tenure with ABC remain Fit and Proper.</p>
                            </li>
                            <li>
                                <p>In order to be registered as a FAIS representative you will be required to sign and attest to certain declarations and you accordingly undertake to sign same as soon as reasonably possible upon presentation thereof to you by ABC.</p>
                            </li>
                            <li>
                                <p>You shall at all times only act as a representative rendering “scripted sales execution” services (as defined in FAIS) and you are accordingly barred from providing any advice to any clients or policyholders (potential or existing) of ABC.</p>
                            </li>
                            <li>
                                <p>You acknowledge that it remains your sole responsibility to familiarise yourself with the applicable provision of FAIS and to comply therewith in all relevant respects throughout your employment tenure with ABC.</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h5><u>Working hours</u></h5>
                        <p>You are required to work a minimum of 10 (ten) days per month (during Monday’s to Saturday’s, as may be directed by ABC on behalf of ABC from time to time), for a total number of hours not exceeding 59 (fifty nine) hours during any given month.</p>
                    </li>
                    <li>
                        <h5><u>Leave</u></h5>
                        <p>You are granted annual leave on full pay at an accrued rate of 1 (one) day for every 17 (seventeen) working days actually worked during a 12 (twelve) month leave cycle.</p>
                    </li>
                    <li>
                        <h5><u>Termination of Employment</u></h5>
                        <ol>
                            <li>
                                <p>This contract shall automatically terminate upon the expiry of the 3 months period referred to above without either party having to notify the other party in advance.</p>
                            </li>
                            <li>
                                <p>Notwithstanding anything to the contrary contained herein, this employment agreement (and the employment relationship) may, in due accordance with the provisions of the Labour Relations Act and any other relevant legislation, be terminated at any time by ABC for any reason related to your conduct, incapacity or due to ABC’s operational requirements.</p>
                            </li>
                            <li>
                                <p>Notwithstanding anything to the contrary contained herein, you may terminate this fixed term contract at any time upon giving the following minimum notice to ABC:</p>
                                <p>8.2.1. (one) weeks’ written notice if you have been employed for 6 (six) months or less;</p>
                            </li>
                            <li>
                                <p>ABC reserves the right to pay you the equivalent of the remuneration due for your above notice period in lieu of notice.</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h5><u>Conficentiality</u></h5>
                        <p>You undertake not to, at any time during or after termination of your employment with ABC, divulge to any person any confidential information relating to ABC’s business affairs and/or trade secrets.</p>
                    </li>
                    <li>
                        <h5><u>Conditions of Service</u></h5>
                        <ol>
                            <li>
                                <p>As part of your induction training a link to the copies of ABC’s latest company Policy and Procedure manual is supplied to you which contains, inter alia, ABC’s Code of Conduct and Disciplinary Code.</p>
                            </li>
                            <li>
                                <p>You agree that it remains your sole responsibility to familiarise yourself with all of ABC’s in force company Policies and Procedures – a full set of which can be obtained, upon request, from ABC’s HR Department.</p>
                            </li>
                            <li>
                                <p>You acknowledge that all information and/or documentation provided to ABC in support of your employment application (e.g. academic qualifications, employment references, criminal history etc.) were material to ABC’s determination whether or not to appoint you in your above employment role. Should it at any time post your employment commencement date be found that any of the aforementioned information and/or documentation that you provided to ABC was falsified and/or contained incorrect or inaccurate information, same would be regarded as a material misrepresentation on your part and could lead to summary dismissal.</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h5><u>Polygraph testing</u></h5>
                        <p>You agree that ABC may, at any time and for any reason whatsoever, require you to undergo a polygraph tests and that your failure to adhere to such instruction may result in disciplinary action being instituted against you.</p>
                    </li>
                    <li>
                        <h5><u>Acceptance of risks</u></h5>
                            <ol>
                                <li>
                                    <p>Subject to any relevant legislation and/or regulation, the employee agrees that the company, their representative, employees, volunteers, directors, officers and/or representatives are not responsible for any death, illness, injury, loss or damage of any kind sustained by any person or employee while on duty or field/road trip and related activities, caused in any matter whatsoever. This includes:</p>
                                    <ol>
                                        <li>
                                            <p>the risk associated with travel and all related activities including transport by public or private motor vehicle (company motor vehicles);</p>
                                        </li>
                                        <li>
                                            <p>any injury, illness, death, loss or damage resulting from exposure to weather elements; or</p>
                                        </li>
                                        <li>
                                            <p>physical injuries such as muscular injuries, bruises, scrapes, cuts, sprains, dislocations, broken bones and head, facial or dental injuries which might result from an accidental injury; illness resulting from food poisoning or parasites: and the possibilities of physical confrontation whether caused by myself or some other person resulting in injuries and/or death.</p>
                                        </li>
                                    </ol>
                                </li>
                                
                            </ol>
                    </li>
                    <li>
                        <h5><u>Processing and Protection of Personal Information</u></h5>
                        <ol>
                            <li>
                                <p>Your privacy is important to ABC and we will use reasonable efforts in order to ensure that any information, including personal information, provided by you, or which is collected from you, is stored in a secure manner.</p>
                            </li>
                            <li>
                                <p>You agree to give (where applicable) honest, accurate and current information about yourself to ABC and to maintain and update such information.</p>
                            </li>
                            <li>
                                <p>Your personal information collected by ABC may be used for the following reasons:</p>
                                <ol>
                                    <li><p>The provision of references;</p></li>
                                    <li><p>Fraud Prevention</p></li>
                                    <li><p>Performance appraisal; and</p></li>
                                    <li><p>SARS reporting</p></li>
                                </ol>
                            </li>
                            <li>
                                <p>You acknowledge that any information supplied to ABC in terms of this employment agreement is provided voluntarily.</p>
                            </li>
                            <li>
                                <p>By submitting any information to ABC in any form you further acknowledge that such conduct constitutes an unconditional, specific and voluntary consent to the processing of such information by ABC under any applicable law in the manner contemplated in clause 14.3 above, which consent shall, in the absence of any written objection received from you, be indefinite and/or for the period otherwise required in terms of any applicable law.</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h5><u>General</u></h5>
                        <ol>
                            <li>
                                <p>This fixed term contract and any Annexure attached hereto contains the entire agreement between you and ABC and ABC shall not be bound by any undertakings, representations, warranties, promises or the like not recorded herein.</p>
                            </li>
                            <li>
                                <p>No indulgence, leniency or extension of time which ABC may give or allow to you in respect of the performance of any of your obligations hereunder, shall in any way prejudice ABC or preclude ABC from exercising any of its rights of enforcing your obligations in terms of this employment agreement.</p>
                            </li>
                            <li>
                                <p>No expectation has been created of any permanent employment at the expiry of the period of this contract.</p>
                            </li>
                        </ol>
                    </li>
                </ol>
                <br/><br/>
                <p>Yours sincerely,</p>
                <input type="text" name="name2" 
                onChange={(event)=>setValues((prev)=> ({...prev, name2: event.target.value}))}
                />
                <p>(Contracting Manager for and on behalf of ABC)</p>
                <hr style={{borderTop:'dotted'}}/>
                <br/>
                <h5><u>ACCEPTANCE OF CONDITIONS</u></h5>
                <p>I,<input type="text" name="name" 
                onChange={(event)=>setValues((prev)=> ({...prev, name3: event.target.value}))}
                /> with identity number: <input type="text" name="name" 
                
                />, hereby agree to the terms and conditions of employment as contained and detailed in this employment agreement as well as Annexures A, B and C hereto.</p>
                <br/><br/>
                {/* <div style={{flex:1,display: 'flex', justifyContent: 'space-between', paddingLeft: '5%',paddingRight:'5%', width:'90%'}}> */}
                   
                <p>Signature</p>
                <input  type="file" name="name" />
                {/* </div > */}
                {/* <div style={{width:'70%'}}> */}
                <p>Date</p>
                <input type="text" name="name"
                onChange={(event)=>setValues((prev)=> ({...prev, date3: event.target.value}))}
                />
                {/* </div> */}
                {/* </div> */}
                <br/><br/>
                <input style={{
  marginLeft:20,backgroundColor:'#1976D3', borderColor:'#1976D3', borderRadius:20, color:'white', paddingLeft:10,paddingRight:10, paddingTop:5, paddingBottom:5, fontSize:20}}  type='submit'/>
                <br/><br/>
                </form>
            </div>
        </div>
    </div>
    </div>

  )
}

export default FixedTermContact;
    