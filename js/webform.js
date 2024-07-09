console.log("Hi");
function initGrievanceForm() {
    //build Grievance form
    let grievanceTemplate = `
        <style>
            .bd-667472043601d-control {
                margin-top: 10px;
            }
            .bd-667472043601d-control-label,
            .bd-667472043601d-control-label-inline {
                font-weight: bold;
            }
            .bd-667472043601d-control-label-inline {
                width: 140px;
                float: left;
            }
            #bd-667472043601d-grievanceForm.validated input:invalid,
            #bd-667472043601d-grievanceForm.validated select:invalid,
            #bd-667472043601d-grievanceForm.validated textarea:invalid,
            .bd-667472043601d-invalidField {
                border: 1px solid red;
            }
            .bd-667472043601d-required-label {
                color: red;
            }
            .bd-667472043601d-table {
                border-collapse: collapse;
                width: 100%;
            }
            .bd-667472043601d-table th,
            .bd-667472043601d-table td {
                padding: 8px;
                text-align: left;
            }
            .bd-667472043601d-table td {
                border: 1px solid black;
            }
            #bd-667472043601d-grievanceForm h4 {
                text-align: center;
            }
            #bd-667472043601d-grievance-type-options {
                margin-left: 10px;
                padding-top: 5px;
                padding-bottom: 5px;
            }
            #bd-667472043601d-grievance-type-container {
                border: 1px solid black;
                padding: 8px;
            }
            #bd-667472043601d-grievanceFormSubmitContainer {
                margin-top: 10px;
                text-align: center;
            }
            #bd-667472043601d-grievanceFormSubmitBtn {
                padding: 8px;
            }
            #bd-667472043601d-grievanceForm textarea {
                width: 100%;
            }
            /*#bd-667472043601d-grievanceForm select{
                height: 21px;
            }*/
        </style>
        <form id="bd-667472043601d-grievanceForm" accept-charset="utf-8">
            <div id="bd-667472043601d-grievance-type-container">
                <div class="bd-667472043601d-control-label">Type of Grievance (select any that apply):</div>
                <div id="bd-667472043601d-grievance-type-options">
                    <div>
                        <label><input type="checkbox" name="GrievanceType[]" value="Accommodation Request" /> Accommodation Request</label>
                    </div>
                    <div>
                        <label><input type="checkbox" name="GrievanceType[]" value="Program/Service" /> Program/Service</label>
                    </div>
                    <div>
                        <label><input type="checkbox" name="GrievanceType[]" value="Facility Accessibility" /> Facility Accessibility</label>
                    </div>
                    <div>
                        <label style="display: inline;"><input type="checkbox" name="GrievanceType[]" value="Other" /> Other:</label>
                        <input type="text" name="GrievanceTypeOther" value="" />
                    </div>
                </div>
                <div>
                    <label for="bd-667472043601d-cf_2025" class="bd-667472043601d-control-label">Department/Program:</label>
                    <input type="text" name="cf_2025" value="" id="bd-667472043601d-cf_2025" required />
                </div>
            </div>
            <div>
                <h4>CONTACT INFORMATION</h4>
                <table class="bd-667472043601d-table">
                    <tr>
                        <th>Reporting Individual</th>
                        <th>On Behalf of:<br><sub>(if different than Reporting Individual)</sub></th>
                    </tr>
                    <tr>
                        <td>
                            <div><label>Full Name:</label></div>
                            <div>
                                <input type="text" name="RequesterFirstName" value="" id="bd-667472043601d-RequesterFirstName" placeholder="First Name" aria-label="Reporting Individual First Name" required />
                                <input type="text" name="RequesterLastName" value="" id="bd-667472043601d-RequesterLastName" placeholder="Last Name" aria-label="Reporting Individual Last Name" required />
                            </div>
                        </td>
                        <td>
                            <div><label>Full Name:</label></div>
                            <div>
                                <input type="text" name="SubmitterFirstName" value="" id="bd-667472043601d-SubmitterFirstName" placeholder="First Name" aria-label="On Behalf of First Name" />
                                <input type="text" name="SubmitterLastName" value="" id="bd-667472043601d-SubmitterLastName" placeholder="Last Name" aria-label="On Behalf of Last Name" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>Address:</label></div>
                            <div><input type="text" name="RequesterAddress" value="" id="bd-667472043601d-RequesterAddress" placeholder="Address" aria-label="Reporting Individual Address" required /></div>
                        </td>
                        <td>
                            <div><label>Address:</label></div>
                            <div><input type="text" name="SubmitterAddress" value="" id="bd-667472043601d-SubmitterAddress" placeholder="Address" aria-label="On Behalf of Address" /></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>City, State, and Zip Code:</label></div>
                            <div>
                                <input type="text" name="RequesterCity" value="" id="bd-667472043601d-RequesterCity" placeholder="City" aria-label="Reporting Individual City" required />
                                <select name="RequesterState" id="bd-667472043601d-RequesterState" aria-label="Reporting Individual State" required><option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option></select>
                                <input type="text" name="RequesterZip" value="" id="bd-667472043601d-RequesterZip" placeholder="Zip Code" aria-label="Reporting Individual Zip Code" required />
                            </div>
                        </td>
                        <td>
                            <div><label>City, State, and Zip Code:</label></div>
                            <div>
                                <input type="text" name="SubmitterCity" value="" id="bd-667472043601d-SubmitterCity" placeholder="City" aria-label="On Behalf of City" />
                                <select name="SubmitterState" id="bd-667472043601d-SubmitterState" aria-label="On Behalf of State"><option value="">State</option><option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option></select>
                                <input type="text" name="SubmitterZip" value="" id="bd-667472043601d-SubmitterZip" placeholder="Zip Code" aria-label="On Behalf of Zip Code" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>Phone:</label></div>
                            <div><input type="tel" name="RequesterPhone" value="" class="bd-667472043601d-poc" id="bd-667472043601d-RequesterPhone" placeholder="Phone Number" aria-label="Reporting Individual Phone" required /></div>
                        </td>
                        <td>
                            <div><label>Phone:</label></div>
                            <div><input type="tel" name="SubmitterPhone" value="" class="bd-667472043601d-poc" id="bd-667472043601d-SubmitterPhone" placeholder="Phone Number" aria-label="On Behalf of Phone" data-submitter="1" /></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>E-mail:</label></div>
                            <div><input type="email" name="RequesterEmail" value="" class="bd-667472043601d-poc" id="bd-667472043601d-RequesterEmail" placeholder="Email" aria-label="Reporting Individual Email" required /></div>
                        </td>
                        <td>
                            <div><label>E-mail:</label></div>
                            <div><input type="email" name="SubmitterEmail" value="" class="bd-667472043601d-poc" id="bd-667472043601d-SubmitterEmail" placeholder="Email" aria-label="On Behalf of Email" data-submitter="1" /></div>
                        </td>
                    </tr>
                </table>

                <h4>COMPLAINT/INCIDENT DETAILS</h4>
                <div class="bd-667472043601d-control">
                    <label class="bd-667472043601d-control-label-inline">Date of Incident:</label>
                    <input type="date" name="IncidentDate" id="bd-667472043601d-IncidentDate" size="16" required />
                </div>
                <div class="bd-667472043601d-control">
                    <label for="bd-667472043601d-ActualAddress" class="bd-667472043601d-control-label-inline">Address:</label>
                    <input type="text" name="ActualAddress" value="" id="bd-667472043601d-ActualAddress" required />
                </div>
                <div class="bd-667472043601d-control">
                    <div>
                        <label class="bd-667472043601d-control-label-inline">City/State/Zip:</label>
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-667472043601d-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-667472043601d-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-667472043601d-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-667472043601d-control">
                    <div><label for="bd-667472043601d-Description" class="bd-667472043601d-control-label">Describe the complaint/incident:</label></div>
                    <div><textarea name="cf_2026" cols="40" rows="3" id="bd-667472043601d-Description" required></textarea><div>
                </div>
                <div class="bd-667472043601d-control">
                    <div><label for="bd-667472043601d-PriorResolution" class="bd-667472043601d-control-label">Have efforts been made to resolve this complaint through the Department in which the alleged discrimination took place? If yes, please describe the efforts that have been made:</label></div>
                    <div>
                        <textarea name="cf_2027" cols="40" rows="4" id="bd-667472043601d-PriorResolution" required></textarea>
                    </div>
                </div>
                <div class="bd-667472043601d-control">
                    <div><label for="bd-667472043601d-RemedySought" class="bd-667472043601d-control-label">Remedy Sought:</label></div>
                    <div>
                        <textarea name="cf_2028" cols="40" rows="3" id="bd-667472043601d-RemedySought" required></textarea>
                    </div>
                </div>
            </div>
            <div id="bd-667472043601d-grievanceFormSubmitContainer">
                <button id="bd-667472043601d-grievanceFormSubmitBtn">Submit</button>
            </div>
        </form>
    `;
    document.getElementById("bd-grievance").innerHTML = grievanceTemplate;

    document.getElementById("bd-667472043601d-grievanceFormSubmitBtn").addEventListener("click", submitGrievanceForm);
    const pocFields = document.querySelectorAll('.bd-667472043601d-poc');
    for (let i = 0; i < pocFields.length; i++) {
        pocFields[i].addEventListener('change', requesterPhoneEmailValidation);
    }
}
initGrievanceForm();

function submitGrievanceForm(e) {
    e.preventDefault();

    let submitterDifferent = submitterDifferentCheck();

    let form = document.getElementById("bd-667472043601d-grievanceForm");
    form.classList.add('validated');

    if (grievanceTypeValidation() && form.checkValidity()) {
        const formFields = document.getElementById("bd-667472043601d-grievanceForm").elements;
        let postObj = {};
        let customFields = {};
        let grievanceTypes = [];
        for (let i = 0; i < formFields.length; i++) {
            const item = formFields.item(i);
            if (item.name) {
                if (item.name.startsWith('cf_')) {
                    customFields[item.name.substring(3)] = item.value;
                } else if (item.type === 'radio') {
                    if (item.checked) {
                        postObj[item.name] = item.value;
                    }
                } else if (item.type === 'checkbox' && item.name === 'GrievanceType[]') {
                    if (item.checked) {
                        grievanceTypes.push(item.value);
                    }
                } else {
                    postObj[item.name] = item.value;
                }
            }
        }

        if (!postObj.SubmitterCity) {
            postObj.SubmitterState = "";
        }

        //Handle Grievance types custom field
        if (grievanceTypes.length > 0) {
            let grievanceTypesString = grievanceTypes.join(', ');
            if (postObj.GrievanceTypeOther) {
                grievanceTypesString += `: ${postObj.GrievanceTypeOther}`;
            }
            customFields[2024] = grievanceTypesString;
        }
        delete postObj.GrievanceTypeOther;

        //Add Additional required fields
        postObj.RequestTypeID = '3';
        postObj.ADAGrievance = '-1';
        postObj.LocationAddress = 'General Location';
        postObj.SubmitterDifferent = submitterDifferent;
        postObj.ExtraData = { Custom: customFields};
        if (12215) {
            postObj.CompanyID = '12215';
        }

        // If both "Reporting Individual" and "On Behalf Of" are filled out,
        // set the Requester field to the "On Behalf Of" data and the Submitter field to the "Reporting Individual" data.
        if (submitterDifferent == "yes") {
            let tempFirstName = postObj.RequesterFirstName;
            let tempLastName = postObj.RequesterLastName;
            let tempAddress = postObj.RequesterAddress;
            let tempCity = postObj.RequesterCity;
            let tempState = postObj.RequesterState;
            let tempZip = postObj.RequesterZip;
            let tempPhone = postObj.RequesterPhone;
            let tempEmail = postObj.RequesterEmail;

            postObj.RequesterFirstName = postObj.SubmitterFirstName;
            postObj.RequesterLastName = postObj.SubmitterLastName;
            postObj.RequesterAddress = postObj.SubmitterAddress;
            postObj.RequesterCity = postObj.SubmitterCity;
            postObj.RequesterState = postObj.SubmitterState;
            postObj.RequesterZip = postObj.SubmitterZip;
            postObj.RequesterPhone = postObj.SubmitterPhone;
            postObj.RequesterEmail = postObj.SubmitterEmail;

            postObj.SubmitterFirstName = tempFirstName;
            postObj.SubmitterLastName = tempLastName;
            postObj.SubmitterAddress = tempAddress;
            postObj.SubmitterCity = tempCity;
            postObj.SubmitterState = tempState;
            postObj.SubmitterZip = tempZip;
            postObj.SubmitterPhone = tempPhone;
            postObj.SubmitterEmail = tempEmail;
        }

        //POST to BlueDAG API
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                let failureContent = "An error occurred while submitting your grievance. Please try again later. <button onclick=\"window.location.reload()\">Retry</button>";
                if (this.status == 200) {
                    if (this.response.success) {
                        document.getElementById("bd-grievance").innerHTML = "Your grievance has been submitted.";
                    } else {
                        console.log(this.response.message);
                        document.getElementById("bd-grievance").innerHTML = failureContent;
                    }
                } else {
                    document.getElementById("bd-grievance").innerHTML = failureContent;
                }
            }
        };
        xhr.open("POST", "https:\/\/api.bluedag.com\/js\/grievance\/submit?jsAuth=zDjTiOyLB5I9jDbKw3IEB3Mwqa0iwpeqJONmBHCFQfv8H9TjS6XZRR5AHCO2K4lc");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(postObj));

        document.getElementById("bd-grievance").innerHTML = "Submitting your grievance...";
    }
}

function requesterPhoneEmailValidation(e) {
    const type = e.target.dataset.submitter ? "Submitter" : "Requester";
    const formId = e.target.closest('form').getAttribute('id');
    const form = document.querySelector('#' + formId);
    const email = form.querySelector('[name="'+type+'Email"]');
    const phone = form.querySelector('[name="'+type+'Phone"]');

    if (email.value.trim()) {
        phone.removeAttribute('required');
        email.setAttribute('required', true);
    } else if (phone.value.trim()) {
        email.removeAttribute('required');
        phone.setAttribute('required', true);
    } else {
        email.setAttribute('required', true);
        phone.setAttribute('required', true);
    }
}

function submitterDifferentCheck() {
    let isSubmitterDifferent = "no";
    let submitterFields = document.getElementById("bd-667472043601d-submitterDetails");
    let submitterFirstNameField = document.getElementById("bd-667472043601d-SubmitterFirstName");
    let submitterLastNameField = document.getElementById("bd-667472043601d-SubmitterLastName");
    let submitterEmail = document.getElementById("bd-667472043601d-SubmitterEmail");
    let submitterPhone = document.getElementById("bd-667472043601d-SubmitterPhone");

    if (submitterFirstNameField && submitterFirstNameField.value) {
        if (submitterFirstNameField !== null) submitterFirstNameField.required = true;
        if (submitterLastNameField !== null) submitterLastNameField.required = true;
        if (submitterEmail !== null) {
            submitterEmail.required = false;
        }
        if (submitterPhone !== null) {
            submitterPhone.required = false;
        }
        if (submitterEmail !== null && !submitterEmail.value && submitterPhone !== null && !submitterPhone.value) {
            submitterEmail.required = true;
            submitterPhone.required = true;
        }
        isSubmitterDifferent = "yes"
    } else {
        if (submitterFirstNameField !== null) submitterFirstNameField.required = false;
        if (submitterLastNameField !== null) submitterLastNameField.required = false;
        if (submitterEmail !== null) submitterEmail.required = false;
        if (submitterPhone !== null) submitterPhone.required = false;
    }

    return isSubmitterDifferent;
}

function grievanceTypeValidation() {
    let validated = false;
    let checkboxes = document.querySelectorAll('input[name="GrievanceType[]"]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            validated = true;
            break;
        }
    }
    let grievanceTypeOptions = document.getElementById("bd-667472043601d-grievance-type-options");
    if (grievanceTypeOptions) {
        if (!validated) {
            grievanceTypeOptions.classList.add('bd-667472043601d-invalidField');
        } else {
            grievanceTypeOptions.classList.remove('bd-667472043601d-invalidField');
        }
    }

    let otherCheckbox = document.querySelector('input[name="GrievanceType[]"][value="Other"]');
    let otherInput = document.querySelector('input[name="GrievanceTypeOther"]');
    if (otherCheckbox && otherInput) {
        if (otherCheckbox.checked) {
        otherInput.setAttribute('required', 'required');
        } else {
            otherInput.removeAttribute('required');
        }
    }

    return validated;
}