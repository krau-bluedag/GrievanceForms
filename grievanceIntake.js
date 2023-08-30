<?php
$states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
$stateOptions = "";
foreach ($states as $state) {
    $stateOptions .= '<option value="' . $state . '">' . $state . '</option>';
}
?>
function initGrievanceForm() {
    //build Grievance form
    let grievanceTemplate = `
        <style>
            .<?= $prefix ?>-control-group {
                margin-bottom: 20px;
            }
            .<?= $prefix ?>-control-label {
                float: left;
                width: 160px;
                padding-top: 5px;
                text-align: right;
            }
            .<?= $prefix ?>-controls {
                margin-left: 180px;
            }
            #<?= $prefix ?>-grievanceForm.validated input:invalid,
            #<?= $prefix ?>-grievanceForm.validated select:invalid
             {
                border: 1px solid red;
            }
            .<?= $prefix ?>-required-label {
                color: red;
            }
        </style>
        <form id="<?= $prefix ?>-grievanceForm" accept-charset="utf-8">
            <div>
                <h4>Requester Information</h4>
                <div class="<?= $prefix ?>-control-group">
                    <label for="<?= $prefix ?>-RequesterFirstName" class="<?= $prefix ?>-control-label"><span class="<?= $prefix ?>-required-label">*</span> Name:</label>
                    <div class="<?= $prefix ?>-controls">
                        <input type="text" name="RequesterFirstName" value="" id="<?= $prefix ?>-RequesterFirstName" placeholder="First Name" required />
                        <input type="text" name="RequesterLastName" value="" id="<?= $prefix ?>-RequesterLastName" placeholder="Last Name" aria-label="Last Name" required />
                    </div>
                </div>
                <div class="<?= $prefix ?>-control-group">
                    <label for="<?= $prefix ?>-RequesterPhone" class="<?= $prefix ?>-control-label">Phone Number:</label>
                    <div class="<?= $prefix ?>-controls">
                        <input type="tel" name="RequesterPhone" value="" id="<?= $prefix ?>-RequesterPhone" />
                    </div>
                </div>
                <div class="<?= $prefix ?>-control-group">
                    <label for="<?= $prefix ?>-RequesterEmail" class="<?= $prefix ?>-control-label">Email:</label>
                    <div class="<?= $prefix ?>-controls">
                        <input type="email" name="RequesterEmail" value="" id="<?= $prefix ?>-RequesterEmail" />
                    </div>
                </div>
                <div class="<?= $prefix ?>-control-group">
                    <label class="<?= $prefix ?>-control-label">Is submitter different:</label>
                    <div class="<?= $prefix ?>-controls">
                        <label class="radio"><input type="radio" name="SubmitterDifferent" value="yes" id="<?= $prefix ?>-SubmitterDifferent_Yes" /> Yes</label>
                        <label class="radio"><input type="radio" name="SubmitterDifferent" value="no" id="<?= $prefix ?>-SubmitterDifferent_No" checked /> No</label>
                    </div>
                </div>
                <div id="<?= $prefix ?>-submitterDetails" style="display: none;">
                    <hr />
                    <h4>Submitter Information</h4>
                    <div class="<?= $prefix ?>-control-group">
                        <label for="<?= $prefix ?>-SubmitterFirstName" class="<?= $prefix ?>-control-label">Name:</label>
                        <div class="<?= $prefix ?>-controls">
                            <input type="text" name="SubmitterFirstName" value="" id="<?= $prefix ?>-SubmitterFirstName" placeholder="First Name" />
                            <input type="text" name="SubmitterLastName" value="" id="<?= $prefix ?>-SubmitterLastName" placeholder="Last Name" aria-label="Last Name" />
                        </div>
                    </div>
                    <div class="<?= $prefix ?>-control-group">
                        <label for="<?= $prefix ?>-SubmitterPhone" class="<?= $prefix ?>-control-label">Phone Number:</label>
                        <div class="<?= $prefix ?>-controls">
                            <input type="tel" name="SubmitterPhone" value="" id="<?= $prefix ?>-SubmitterPhone" />
                        </div>
                    </div>
                    <div class="<?= $prefix ?>-control-group">
                        <label for="<?= $prefix ?>-SubmitterEmail" class="<?= $prefix ?>-control-label">Email:</label>
                        <div class="<?= $prefix ?>-controls">
                            <input type="email" name="SubmitterEmail" value="" id="<?= $prefix ?>-SubmitterEmail" />
                        </div>
                    </div>
                    <div class="<?= $prefix ?>-control-group" style="margin-bottom: 10px;">
                        <label for="<?= $prefix ?>-SubmitterTitle" class="<?= $prefix ?>-control-label">Relationship to Requester:</label>
                        <div class="<?= $prefix ?>-controls">
                            <input type="text" name="SubmitterTitle" value="" id="<?= $prefix ?>-SubmitterTitle" />
                        </div>
                    </div><br />
                </div>
                <hr />
                <h4>Location Information</h4>
                <div class="<?= $prefix ?>-control-group">
                    <label for="<?= $prefix ?>-LocationAddress" class="<?= $prefix ?>-control-label"><span class="<?= $prefix ?>-required-label">*</span> Location:</label>
                    <div class="<?= $prefix ?>-controls">
                        <input type="text" name="LocationAddress" value="" id="<?= $prefix ?>-LocationAddress" required />
                    </div>
                </div>
                <div class="<?= $prefix ?>-control-group">
                    <label for="<?= $prefix ?>-ActualAddress" class="<?= $prefix ?>-control-label"><span class="<?= $prefix ?>-required-label">*</span> Address:</label>
                    <div class="<?= $prefix ?>-controls">
                        <span>
                            <input type="text" name="ActualAddress" value="" id="<?= $prefix ?>-ActualAddress" required />
                        </span>
                    </div>
                </div>
                <div class="<?= $prefix ?>-control-group">
                    <label class="<?= $prefix ?>-control-label"><span class="<?= $prefix ?>-required-label">*</span> City/State/Zip:</label>
                    <div class="<?= $prefix ?>-controls">
                        <span>
                            <input type="text" name="LocationCity" value="" id="<?= $prefix ?>-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="<?= $prefix ?>-LocationState" aria-label="State" required>
                                <?= $stateOptions ?>
                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="<?= $prefix ?>-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="<?= $prefix ?>-control-group">
                    <label for="<?= $prefix ?>-LocationNote" class="<?= $prefix ?>-control-label">Location Notes:</label>
                    <div class="<?= $prefix ?>-controls">
                        <textarea name="LocationNote" cols="40" rows="3" id="<?= $prefix ?>-LocationNote"></textarea>
                    </div>
                </div>
                <hr />
                <h4>Request Information</h4>
                <div class="<?= $prefix ?>-control-group">
                    <label for="<?= $prefix ?>-RequestTypeID" class="<?= $prefix ?>-control-label"><span class="<?= $prefix ?>-required-label">*</span> Request Type:</label>
                    <div class="<?= $prefix ?>-controls">
                        <span>
                            <select name="RequestTypeID" required>
                                <option value="" selected="selected">Please Select...</option>
<?php
if (!empty($requestTypes)) {
    foreach ($requestTypes as $requestType) {
?>
                                <option value="<?= $requestType['ID'] ?>"><?= $requestType['Name'] ?></option>
<?php
    }
}
?>
                            </select>
                        </span>
                    </div>
                </div>
                <div class="<?= $prefix ?>-control-group">
                    <label class="<?= $prefix ?>-control-label">Is this ADA-related:</label>
                    <div class="<?= $prefix ?>-controls">
                        <label><input type="radio" name="ADAGrievance" value="1" /> Yes</label>
                        <label><input type="radio" name="ADAGrievance" value="0" /> No</label>
                        <label><input type="radio" name="ADAGrievance" value="-1" checked="checked" /> Undetermined</label>
                    </div>
                </div>
                <div class="<?= $prefix ?>-control-group">
                    <label class="<?= $prefix ?>-control-label">Date of Incident:</label>
                    <div class="<?= $prefix ?>-controls">
                        <input type="date" name="IncidentDate" id="<?= $prefix ?>-IncidentDate" size="16" />
                    </div>
                </div>
                <div class="<?= $prefix ?>-control-group">
                    <label for="<?= $prefix ?>-RequestReason" class="<?= $prefix ?>-control-label">Nature of Request:</label>
                    <div class="<?= $prefix ?>-controls">
                        <textarea name="RequestReason" cols="40" rows="3" id="<?= $prefix ?>-RequestReason"></textarea>
                    </div>
                </div>
                <div class="<?= $prefix ?>-control-group">
                    <label for="<?= $prefix ?>-Notes" class="<?= $prefix ?>-control-label">Notes:</label>
                    <div class="<?= $prefix ?>-controls">
                        <textarea name="Notes" cols="40" rows="3" id="<?= $prefix ?>-Notes"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button id="<?= $prefix ?>-grievanceFormSubmitBtn">Submit</button>
            </div>
        </form>
    `;
    document.getElementById("bd-grievance").innerHTML = grievanceTemplate;

    //add listeners
    document.getElementById("<?= $prefix ?>-grievanceFormSubmitBtn").addEventListener("click", submitGrievanceForm);
    document.getElementById("<?= $prefix ?>-SubmitterDifferent_Yes").addEventListener("change", submitterDifferent);
    document.getElementById("<?= $prefix ?>-SubmitterDifferent_No").addEventListener("change", submitterDifferent);
}
initGrievanceForm();

function submitGrievanceForm(e) {
    let form = document.getElementById("<?= $prefix ?>-grievanceForm");

    form.classList.add('validated');

    if (form.checkValidity()) {
        const formFields = document.getElementById("<?= $prefix ?>-grievanceForm").elements;
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
        xhr.open("POST", <?= json_encode($jsLocation) ?>);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(postObj));

        document.getElementById("bd-grievance").innerHTML = "<?= $this->lang->line('api_grievance_submission_processing') ?>";
    }
}

function submitterDifferent(e) {
    const isSubmitterDifferent = e.target.value;
    if (typeof isSubmitterDifferent !== "undefined") {
        let submitterFields = document.getElementById("<?= $prefix ?>-submitterDetails");
        let submitterFirstNameField = document.getElementById("<?= $prefix ?>-SubmitterFirstName");
        let submitterLastNameField = document.getElementById("<?= $prefix ?>-SubmitterLastName");

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
