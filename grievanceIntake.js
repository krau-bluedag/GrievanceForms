function initGrievanceForm() {
    //build Grievance form
    let grievanceTemplate = `
        <style>
            .bd-64dbc763a2201-control-group {
                margin-bottom: 20px;
            }
            .bd-64dbc763a2201-control-label {
                float: left;
                width: 160px;
                padding-top: 5px;
                text-align: right;
            }
            .bd-64dbc763a2201-controls {
                margin-left: 180px;
            }
            #bd-64dbc763a2201-grievanceForm.validated input:invalid,
            #bd-64dbc763a2201-grievanceForm.validated select:invalid
             {
                border: 1px solid red;
            }
            .bd-64dbc763a2201-required-label {
                color: red;
            }
        </style>
        <form id="bd-64dbc763a2201-grievanceForm" accept-charset="utf-8">
            <div>
                <h4>Requester Information</h4>
                <div class="bd-64dbc763a2201-control-group">
                    <label for="bd-64dbc763a2201-RequesterName" class="bd-64dbc763a2201-control-label"><span class="bd-64dbc763a2201-required-label">*</span> Name:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <input type="text" name="RequesterFirstName" value="" id="bd-64dbc763a2201-RequesterFirstName" placeholder="First Name" required />
                        <input type="text" name="RequesterLastName" value="" id="bd-64dbc763a2201-RequesterLastName" placeholder="Last Name" aria-label="Last Name" required />
                    </div>
                </div>
                <div class="bd-64dbc763a2201-control-group">
                    <label for="bd-64dbc763a2201-RequesterPhone" class="bd-64dbc763a2201-control-label">Phone Number:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <input type="tel" name="RequesterPhone" value="" class="bd-64dbc763a2201-poc" id="bd-64dbc763a2201-RequesterPhone" />
                    </div>
                </div>
                <div class="bd-64dbc763a2201-control-group">
                    <label for="bd-64dbc763a2201-RequesterEmail" class="bd-64dbc763a2201-control-label">Email:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <input type="email" name="RequesterEmail" value="" class="bd-64dbc763a2201-poc" id="bd-64dbc763a2201-RequesterEmail" />
                    </div>
                </div>
                <div class="bd-64dbc763a2201-control-group">
                    <label class="bd-64dbc763a2201-control-label">Is submitter different:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <label class="radio"><input type="radio" name="SubmitterDifferent" value="yes" id="bd-64dbc763a2201-SubmitterDifferent_Yes" /> Yes</label>
                        <label class="radio"><input type="radio" name="SubmitterDifferent" value="no" id="bd-64dbc763a2201-SubmitterDifferent_No" checked /> No</label>
                    </div>
                </div>
                <div id="bd-64dbc763a2201-submitterDetails" style="display: none;">
                    <hr />
                    <h4>Submitter Information</h4>
                    <div class="bd-64dbc763a2201-control-group">
                        <label for="bd-64dbc763a2201-SubmitterName" class="bd-64dbc763a2201-control-label">Name:</label>
                        <div class="bd-64dbc763a2201-controls">
                            <input type="text" name="SubmitterFirstName" value="" id="bd-64dbc763a2201-SubmitterFirstName" placeholder="First Name" required />
                            <input type="text" name="SubmitterLastName" value="" id="bd-64dbc763a2201-SubmitterLastName" placeholder="Last Name" aria-label="Last Name" required />
                        </div>
                    </div>
                    <div class="bd-64dbc763a2201-control-group">
                        <label for="bd-64dbc763a2201-SubmitterPhone" class="bd-64dbc763a2201-control-label">Phone Number:</label>
                        <div class="bd-64dbc763a2201-controls">
                            <input type="tel" name="SubmitterPhone" value="" class="bd-64dbc763a2201-poc" id="bd-64dbc763a2201-SubmitterPhone" data-submitter="1" />
                        </div>
                    </div>
                    <div class="bd-64dbc763a2201-control-group">
                        <label for="bd-64dbc763a2201-SubmitterEmail" class="bd-64dbc763a2201-control-label">Email:</label>
                        <div class="bd-64dbc763a2201-controls">
                            <input type="email" name="SubmitterEmail" value="" class="bd-64dbc763a2201-poc" id="bd-64dbc763a2201-SubmitterEmail" data-submitter="1" />
                        </div>
                    </div>
                    <div class="bd-64dbc763a2201-control-group" style="margin-bottom: 10px;">
                        <label for="bd-64dbc763a2201-SubmitterTitle" class="bd-64dbc763a2201-control-label">Relationship to Requester:</label>
                        <div class="bd-64dbc763a2201-controls">
                            <input type="text" name="SubmitterTitle" value="" id="bd-64dbc763a2201-SubmitterTitle" />
                        </div>
                    </div><br />
                </div>
                <hr />
                <h4>Location Information</h4>
                <div class="bd-64dbc763a2201-control-group">
                    <label for="bd-64dbc763a2201-LocationAddress" class="bd-64dbc763a2201-control-label"><span class="bd-64dbc763a2201-required-label">*</span> Location:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <input type="text" name="LocationAddress" value="" id="bd-64dbc763a2201-LocationAddress" required />
                    </div>
                </div>
                <div class="bd-64dbc763a2201-control-group">
                    <label for="bd-64dbc763a2201-ActualAddress" class="bd-64dbc763a2201-control-label"><span class="bd-64dbc763a2201-required-label">*</span> Address:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <span>
                            <input type="text" name="ActualAddress" value="" id="bd-64dbc763a2201-ActualAddress" required />
                        </span>
                    </div>
                </div>
                <div class="bd-64dbc763a2201-control-group">
                    <label class="bd-64dbc763a2201-control-label"><span class="bd-64dbc763a2201-required-label">*</span> City/State/Zip:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-64dbc763a2201-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-64dbc763a2201-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-64dbc763a2201-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-64dbc763a2201-control-group">
                    <label for="bd-64dbc763a2201-LocationNote" class="bd-64dbc763a2201-control-label">Location Notes:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <textarea name="LocationNote" cols="40" rows="3" id="bd-64dbc763a2201-LocationNote"></textarea>
                    </div>
                </div>
                <hr />
                <h4>Request Information</h4>
                <div class="bd-64dbc763a2201-control-group">
                    <label for="bd-64dbc763a2201-RequestTypeID" class="bd-64dbc763a2201-control-label"><span class="bd-64dbc763a2201-required-label">*</span> Request Type:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <span>
                            <select name="RequestTypeID" required>
                                <option value="" selected="selected">Please Select...</option>
                                <option value="1">Physical Access (Title II)</option>
                                <option value="2">Program and Services Modification (Title II – Non-Physical)</option>
                                <option value="4">Reasonable Accommodation (Title I - Employee)</option>
                                <option value="6">Reasonable Modification (Title I - Employee - Non Physical)</option>
                                <option value="3">Title VI or Other</option>
                            </select>
                        </span>
                    </div>
                </div>
                <div class="bd-64dbc763a2201-control-group">
                    <label class="bd-64dbc763a2201-control-label">Is this ADA-related:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <label><input type="radio" name="ADAGrievance" value="1" /> Yes</label>
                        <label><input type="radio" name="ADAGrievance" value="0" /> No</label>
                        <label><input type="radio" name="ADAGrievance" value="-1" checked="checked" /> Undetermined</label>
                    </div>
                </div>
                <div class="bd-64dbc763a2201-control-group">
                    <label class="bd-64dbc763a2201-control-label">Date of Incident:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <input type="date" name="IncidentDate" id="bd-64dbc763a2201-IncidentDate" size="16" />
                    </div>
                </div>
                <div class="bd-64dbc763a2201-control-group">
                    <label for="bd-64dbc763a2201-RequestReason" class="bd-64dbc763a2201-control-label">Nature of Request:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <textarea name="RequestReason" cols="40" rows="3" id="bd-64dbc763a2201-RequestReason"></textarea>
                    </div>
                </div>
                <div class="bd-64dbc763a2201-control-group">
                    <label for="bd-64dbc763a2201-Notes" class="bd-64dbc763a2201-control-label">Notes:</label>
                    <div class="bd-64dbc763a2201-controls">
                        <textarea name="Notes" cols="40" rows="3" id="bd-64dbc763a2201-Notes"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button id="bd-64dbc763a2201-grievanceFormSubmitBtn">Submit</button>
            </div>
        </form>
    `;
    document.getElementById("bd-grievance").innerHTML = grievanceTemplate;

    //add listeners
    document.getElementById("bd-64dbc763a2201-grievanceFormSubmitBtn").addEventListener("click", submitGrievanceForm);
    document.getElementById("bd-64dbc763a2201-SubmitterDifferent_Yes").addEventListener("change", submitterDifferent);
    document.getElementById("bd-64dbc763a2201-SubmitterDifferent_No").addEventListener("change", submitterDifferent);
    const pocFields = document.querySelectorAll('.bd-64dbc763a2201-poc');
    for (let i = 0; i < pocFields.length; i++) {
        pocFields[i].addEventListener('change', requesterPhoneEmailValidation);
    }
}
initGrievanceForm();

function submitGrievanceForm(e) {
    let form = document.getElementById("bd-64dbc763a2201-grievanceForm");

    form.classList.add('validated');

    if (form.checkValidity()) {
        const formFields = document.getElementById("bd-64dbc763a2201-grievanceForm").elements;
        let postObj = {};
        for (let i = 0; i < formFields.length; i++) {
            const item = formFields.item(i);
            if (item.name) {
                if (item.type === 'radio') {
                    if (item.checked) {
                        postObj[item.name] = item.value;
                    }
                } else {
                    postObj[item.name] = item.value;
                }
            }
        }
        console.log(postObj);

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
        xhr.open("POST", "https:\/\/api.bluedag.com\/js\/grievance\/submit?jsAuth=GhE6RN1NIvYc3sENINn1HzftRTXwIB4Jxnxwq0HOiEJTvsHLEqStwGK6tsQYJ6px");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(postObj));

        document.getElementById("bd-grievance").innerHTML = "Submitting your grievance...";
    }
}

function submitterDifferent(e) {
    const isSubmitterDifferent = e.target.value;
    if (typeof isSubmitterDifferent !== "undefined") {
        let submitterFields = document.getElementById("bd-64dbc763a2201-submitterDetails");
        let submitterFirstNameField = document.getElementById("bd-64dbc763a2201-SubmitterFirstName");
        let submitterLastNameField = document.getElementById("bd-64dbc763a2201-SubmitterLastName");

        if (typeof submitterFields !== "undefined") {
            if (isSubmitterDifferent === "yes") {
                submitterFields.style.display = "block";
                if (submitterFirstNameField !== null) submitterFirstNameField.required = true;
                if (submitterLastNameField !== null) submitterLastNameField.required = true;
            } else {
                submitterFields.style.display = "none";
                if (submitterFirstNameField !== null) submitterFirstNameField.required = false;
                if (submitterLastNameField !== null) submitterLastNameField.required = false;
            }
        }
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
