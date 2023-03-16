function initGrievanceForm() {
    //build Grievance form
    let grievanceTemplate = `
        <style>
            .bd-6410f65debc83-control-group {
                display: block;
                margin-bottom: 24px;
            }
            .bd-6410f65debc83-control-label {
                float: left;
                width: 170px;
                padding-top: 5px;
                text-align: right;
            }
            .bd-6410f65debc83-controls {
                margin-left: 180px;
                padding-top: 5px;
            }
            #bd-6410f65debc83-grievanceForm.validated input:invalid,
            #bd-6410f65debc83-grievanceForm.validated select:invalid,
            #bd-6410f65debc83-raCameraForm.validated input:invalid,
            #bd-6410f65debc83-raCameraForm.validated select:invalid,
            #bd-6410f65debc83-raInterpreterForm.validated input:invalid,
            #bd-6410f65debc83-raInterpreterForm.validated select:invalid
            {
                border: 1px solid red;
            }
            .bd-6410f65debc83-required-label {
                color: red;
            }
        </style>
        <div id="bd-6410f65debc83-formSelector">
            <div>
                <label for="bd-6410f65debc83-RAProgramType" class=""><span class="bd-6410f65debc83-required-label">*</span> Reasonable Accommodation Program Type:</label>
                <div style="padding: 10px 0;">
                    <span>
                        <select name="cf_RAProgramType" id="bd-6410f65debc83-RAProgramType" required>
                            <option value="" selected="selected">Please Select...</option>
                            <option value="Grievance">Grievance</option>
                            <option value="Reasonable Accommodation">Reasonable Accommodation General</option>
                            <option value="Camera">Audio/Video Recording Request</option>
                            <option value="Interpreter">Interpreting Service Request</option>
                        </select>
                    </span>
                </div>
            </div>
        </div>
        <hr />
        <form id="bd-6410f65debc83-grievanceForm" accept-charset="utf-8" style="display:none;">
            <input type="hidden" name="RequestTypeID" id="bd-6410f65debc83-RequestTypeID" value="3" />
            <h3 id="bd-6410f65debc83-grievanceFormTitle">Grievance</h3>
            <div>
                <h4>Requester Information</h4>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-RequesterName" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> Name:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="RequesterName" value="" id="bd-6410f65debc83-RequesterName" required />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-RequesterPhone" class="bd-6410f65debc83-control-label">Phone Number:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="tel" name="RequesterPhone" value="" id="bd-6410f65debc83-RequesterPhone" />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-RequesterEmail" class="bd-6410f65debc83-control-label">Email:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="email" name="RequesterEmail" value="" id="bd-6410f65debc83-RequesterEmail" />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label class="bd-6410f65debc83-control-label">Is submitter different:</label>
                    <div class="bd-6410f65debc83-controls">
                        <label class="radio"><input type="radio" name="SubmitterDifferent" value="yes" id="bd-6410f65debc83-SubmitterDifferent_Yes" /> Yes</label>
                        <label class="radio"><input type="radio" name="SubmitterDifferent" value="no" id="bd-6410f65debc83-SubmitterDifferent_No" checked /> No</label>
                    </div>
                </div>
                <div id="bd-6410f65debc83-submitterDetails" style="display: none;">
                    <hr />
                    <h4>Submitter Information</h4>
                    <div class="bd-6410f65debc83-control-group">
                        <label for="bd-6410f65debc83-SubmitterName" class="bd-6410f65debc83-control-label">Name:</label>
                        <div class="bd-6410f65debc83-controls">
                            <input type="text" name="SubmitterName" value="" id="bd-6410f65debc83-SubmitterName" />
                        </div>
                    </div>
                    <div class="bd-6410f65debc83-control-group">
                        <label for="bd-6410f65debc83-SubmitterPhone" class="bd-6410f65debc83-control-label">Phone Number:</label>
                        <div class="bd-6410f65debc83-controls">
                            <input type="tel" name="SubmitterPhone" value="" id="bd-6410f65debc83-SubmitterPhone" />
                        </div>
                    </div>
                    <div class="bd-6410f65debc83-control-group">
                        <label for="bd-6410f65debc83-SubmitterEmail" class="bd-6410f65debc83-control-label">Email:</label>
                        <div class="bd-6410f65debc83-controls">
                            <input type="email" name="SubmitterEmail" value="" id="bd-6410f65debc83-SubmitterEmail" />
                        </div>
                    </div>
                    <div class="bd-6410f65debc83-control-group" style="margin-bottom: 10px;">
                        <label for="bd-6410f65debc83-SubmitterTitle" class="bd-6410f65debc83-control-label">Relationship to Requester:</label>
                        <div class="bd-6410f65debc83-controls">
                            <input type="text" name="SubmitterTitle" value="" id="bd-6410f65debc83-SubmitterTitle" />
                        </div>
                    </div><br />
                </div>
                <hr />
                <h4>Location Information</h4>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-LocationAddress" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> Location:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="LocationAddress" value="" id="bd-6410f65debc83-LocationAddress" required />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-ActualAddress" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> Address:</label>
                    <div class="bd-6410f65debc83-controls">
                        <span>
                            <input type="text" name="ActualAddress" value="" id="bd-6410f65debc83-ActualAddress" required />
                        </span>
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> City/State/Zip:</label>
                    <div class="bd-6410f65debc83-controls">
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-6410f65debc83-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-6410f65debc83-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-6410f65debc83-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-LocationNote" class="bd-6410f65debc83-control-label">Location Notes:</label>
                    <div class="bd-6410f65debc83-controls">
                        <textarea name="LocationNote" cols="40" rows="3" id="bd-6410f65debc83-LocationNote"></textarea>
                    </div>
                </div>
                <hr />
                <h4>Request Information</h4>
                <div class="bd-6410f65debc83-control-group">
                    <label class="bd-6410f65debc83-control-label">Is this ADA-related:</label>
                    <div class="bd-6410f65debc83-controls">
                        <label><input type="radio" name="ADAGrievance" value="1" /> Yes</label>
                        <label><input type="radio" name="ADAGrievance" value="0" /> No</label>
                        <label><input type="radio" name="ADAGrievance" value="-1" checked="checked" /> Undetermined</label>
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label class="bd-6410f65debc83-control-label" for="bd-6410f65debc83-IncidentDate">Date of Incident:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="date" size="16" name="IncidentDate" id="bd-6410f65debc83-IncidentDate" />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-RequestReason" class="bd-6410f65debc83-control-label">Nature of Request:</label>
                    <div class="bd-6410f65debc83-controls">
                        <textarea name="RequestReason" cols="40" rows="3" id="bd-6410f65debc83-RequestReason"></textarea>
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-Notes" class="bd-6410f65debc83-control-label">Notes:</label>
                    <div class="bd-6410f65debc83-controls">
                        <textarea name="Notes" cols="40" rows="3" id="bd-6410f65debc83-Notes"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button id="bd-6410f65debc83-grievanceFormSubmitBtn">Submit</button>
            </div>
        </form>
        <form id="bd-6410f65debc83-raCameraForm" accept-charset="utf-8" style="display:none;">
            <input type="hidden" name="RequestTypeID" value="4" />
            <h3>Audio/Video Recording Request</h3>
            <div>
                <p>Consistent with La. R.S. 17:1948, a parent or legal guardian may request the installation of an audio and video camera in a special education self-contained classroom or other special education setting. For more information, please visit the Exceptional Student Services webpage. This request will be in effect for one academic year.</p>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raCameraForm-AcademicYear" class="bd-6410f65debc83-control-label">Year:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="cf_AcademicYear" value="" id="bd-6410f65debc83-raCameraForm-AcademicYear" />
                    </div>
                </div>
                <h3>Requestor Information:</h3>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raCameraForm-RequesterName" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> Name:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="RequesterName" value="" id="bd-6410f65debc83-raCameraForm-RequesterName" required />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raCameraForm-RequesterPhone" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> Phone Number:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="tel" name="RequesterPhone" value="" id="bd-6410f65debc83-raCameraForm-RequesterPhone" required />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raCameraForm-RequesterEmail" class="bd-6410f65debc83-control-label">Email:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="email" name="RequesterEmail" value="" id="bd-6410f65debc83-raCameraForm-RequesterEmail" />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label class="bd-6410f65debc83-control-label">Relationship to child:</label>
                    <div class="bd-6410f65debc83-controls">
                        <label class="radio"><input type="radio" name="cf_RelationshipToChild" value="parents" /> Parent(s)</label>
                        <label class="radio"><input type="radio" name="cf_RelationshipToChild" value="legal guardian" /> Legal Guardian(s)</label>
                        <label class="radio"><input type="radio" name="cf_RelationshipToChild" value="adult student" /> Adult Student</label>
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raCameraForm-ChildName" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> Child's full name:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="cf_ChildName" value="" id="bd-6410f65debc83-raCameraForm-ChildName" required />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raCameraForm-Dob" class="bd-6410f65debc83-control-label">Date of Birth:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="date" size="16" name="cf_Dob" value="" id="bd-6410f65debc83-raCameraForm-Dob" />
                    </div>
                </div>
                <h3>School Information:</h3>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raCameraForm-LocationAddress" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> School:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="LocationAddress" value="" id="bd-6410f65debc83-raCameraForm-LocationAddress" required />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raCameraForm-ActualAddress" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> Address:</label>
                    <div class="bd-6410f65debc83-controls">
                        <span>
                            <input type="text" name="ActualAddress" value="" id="bd-6410f65debc83-raCameraForm-ActualAddress" required />
                        </span>
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> City/State/Zip:</label>
                    <div class="bd-6410f65debc83-controls">
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-6410f65debc83-raCameraForm-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-6410f65debc83-raCameraForm-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-6410f65debc83-raCameraForm-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raCameraForm-Grade" class="bd-6410f65debc83-control-label">Grade:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="cf_Grade" value="" id="bd-6410f65debc83-raCameraForm-Grade" />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raCameraForm-RoomNumber" class="bd-6410f65debc83-control-label">Classroom / Room Number:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="cf_RoomNumber" value="" id="bd-6410f65debc83-raCameraForm-RoomNumber" />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raCameraForm-Teacher" class="bd-6410f65debc83-control-label">Teacher's name:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="cf_Teacher" value="" id="bd-6410f65debc83-raCameraForm-Teacher" />
                    </div>
                </div>
            </div>
            <div>
                <button id="bd-6410f65debc83-raCameraSubmitBtn">Submit</button>
            </div>
            <hr />
            <ul>
                <li>This request is valid only for the school year indicated above. A new request must be submitted for any subsequent school years on a yearly basis.</li>
                <li>An acknowledgement letter will be sent to you within 5-7 days of receipt of the request.</li>
                <li>A Notice of acceptance or denial will be sent to you within ten (10) days.</li>
                <li>Please submit this form to the DDR utilizing the district's website/system.</li>
                <li>We will strive to install the camera within 30 days of the approved request under normal circumstances. The district will reach out to you to discuss requests made late in the school year for timelines and options</li>
            </ul>
        </form>
        <form id="bd-6410f65debc83-raInterpreterForm" accept-charset="utf-8" style="display:none;">
            <input type="hidden" name="RequestTypeID" value="4" />
            <h3>Interpreting Service Request</h3>
            <div>
                <h4>Requester Information</h4>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-RequesterName" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> Name:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="RequesterName" value="" id="bd-6410f65debc83-raInterpreterForm-RequesterName" required />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-RequesterPhone" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> Phone Number:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="tel" name="RequesterPhone" value="" id="bd-6410f65debc83-raInterpreterForm-RequesterPhone" required />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-RequesterEmail" class="bd-6410f65debc83-control-label">Email:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="email" name="RequesterEmail" value="" id="bd-6410f65debc83-raInterpreterForm-RequesterEmail" />
                    </div>
                </div>
                <h4>Contact Information</h4>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-SubmitterName" class="bd-6410f65debc83-control-label">Contact Person/Doctor:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="SubmitterName" value="" id="bd-6410f65debc83-raInterpreterForm-SubmitterName" />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-SubmitterEmail" class="bd-6410f65debc83-control-label">Contact Email:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="email" name="SubmitterEmail" value="" id="bd-6410f65debc83-raInterpreterForm-SubmitterEmail" />
                    </div>
                </div>
                <h4>Location Information</h4>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-LocationAddress" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> Location:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="" value="" id="bd-6410f65debc83-raInterpreterForm-LocationAddress" required />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-ActualAddress" class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> Address:</label>
                    <div class="bd-6410f65debc83-controls">
                        <span>
                            <input type="text" name="ActualAddress" value="" id="bd-6410f65debc83-raInterpreterForm-ActualAddress" required />
                        </span>
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label class="bd-6410f65debc83-control-label"><span class="bd-6410f65debc83-required-label">*</span> City/State/Zip:</label>
                    <div class="bd-6410f65debc83-controls">
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-6410f65debc83-raInterpreterForm-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-6410f65debc83-raInterpreterForm-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>
                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-6410f65debc83-raInterpreterForm-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-FloorNumber" class="bd-6410f65debc83-control-label">Floor Number:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="cf_FloorNumber" value="" id="bd-6410f65debc83-raInterpreterForm-FloorNumber" />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-RoomNumber" class="bd-6410f65debc83-control-label">Suite Number:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="cf_RoomNumber" value="" id="bd-6410f65debc83-raInterpreterForm-RoomNumber" />
                    </div>
                </div>
                <h4>Client Information</h4>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-ChildName" class="bd-6410f65debc83-control-label">Client/Patient:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="text" name="cf_ChildName" value="" id="bd-6410f65debc83-raInterpreterForm-ChildName" />
                    </div>
                </div>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-Dob" class="bd-6410f65debc83-control-label">Date of Birth:</label>
                    <div class="bd-6410f65debc83-controls">
                        <input type="date" size="16" name="cf_Dob" value="" id="bd-6410f65debc83-raInterpreterForm-Dob" />
                    </div>
                </div>
                <h4>Additional Information</h4>
                <div class="bd-6410f65debc83-control-group">
                    <label for="bd-6410f65debc83-raInterpreterForm-Notes" class="bd-6410f65debc83-control-label">Notes:</label>
                    <div class="bd-6410f65debc83-controls">
                        <textarea name="Notes" cols="40" rows="3" id="bd-6410f65debc83-raInterpreterForm-Notes"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button id="bd-6410f65debc83-raInterpreterSubmitBtn">Submit</button>
            </div>
        </form>
    `;
    document.getElementById("bd-grievance").innerHTML = grievanceTemplate;

    //add listeners
    document.getElementById("bd-6410f65debc83-RAProgramType").addEventListener("change", swapGrievanceForms);
    document.getElementById("bd-6410f65debc83-grievanceFormSubmitBtn").addEventListener("click", submitGrievanceForm);
    document.getElementById("bd-6410f65debc83-raCameraSubmitBtn").addEventListener("click", submitGrievanceForm);
    document.getElementById("bd-6410f65debc83-raInterpreterSubmitBtn").addEventListener("click", submitGrievanceForm);
    document.getElementById("bd-6410f65debc83-SubmitterDifferent_Yes").addEventListener("change", submitterDifferent);
    document.getElementById("bd-6410f65debc83-SubmitterDifferent_No").addEventListener("change", submitterDifferent);
}
initGrievanceForm();

function submitGrievanceForm(e) {
    e.preventDefault();

    const selectedForm = document.getElementById("bd-6410f65debc83-RAProgramType").value;
    const raProgramType = document.getElementById("bd-6410f65debc83-RAProgramType").value;
    let formId = false;

    if (selectedForm === "Grievance" || selectedForm === "Reasonable Accommodation") {
        formId = "grievanceForm";
        document.getElementById("bd-6410f65debc83-RequestTypeID").value = selectedForm === "Grievance" ? 3 : 4;
    } else if (selectedForm === "Camera") {
        formId = "raCameraForm";
    } else if (selectedForm === "Interpreter") {
        formId = "raInterpreterForm";
    }

    if (!formId || !raProgramType) {
        return;
    }

    const form = document.getElementById("bd-6410f65debc83-" + formId);
    form.classList.add('validated');
    if (form.checkValidity()) {
        const formFields = document.getElementById("bd-6410f65debc83-" + formId).elements;
        let postObj = {};
        for (let i = 0; i < formFields.length; i++) {
            const item = formFields.item(i);
            if (item.name) {
                postObj[item.name] = item.value;
            }
        }
        postObj['cf_RAProgramType'] = raProgramType;
        

        //TESTING!!! - remove later
        console.log(postObj);

        // //POST to BlueDAG API
        // var xhr = new XMLHttpRequest();
        // xhr.responseType = "json";
        // xhr.onreadystatechange = function () {
        //     if (this.readyState == 4) {
        //         if (this.status == 200) {
        //             document.getElementById("bd-grievance").innerHTML = "Your grievance has been submitted.";
        //         } else {
        //             let failureContent = "An error occurred while submitting your grievance. Please try again later. <button onclick=\"window.location.reload()\">Retry</button>";
        //             document.getElementById("bd-grievance").innerHTML = failureContent;
        //         }
        //     }
        // };
        // xhr.open("POST", "grievance\/submit?jsAuth=");
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.send(JSON.stringify(postObj));

        // document.getElementById("bd-grievance").innerHTML = "Submitting your grievance...";
    } else {
        console.log("Form validation failed. Ensure all required form fields are completed.");
    }
}

function submitterDifferent(e) {
    const isSubmitterDifferent = e.target.value;
    if (typeof isSubmitterDifferent !== "undefined") {
        let submitterFields = document.getElementById("bd-6410f65debc83-submitterDetails");
        if (typeof submitterFields !== "undefined") {
            submitterFields.style.display = isSubmitterDifferent == "yes" ? "block" : "none";
        }
    }
}

function swapGrievanceForms() {
    //get forms
    const grievanceForm = document.getElementById("bd-6410f65debc83-grievanceForm");
    const cameraForm = document.getElementById("bd-6410f65debc83-raCameraForm");
    const interpreterForm = document.getElementById("bd-6410f65debc83-raInterpreterForm");

    //get the value of the request type
    const selectedValue = document.getElementById("bd-6410f65debc83-RAProgramType").value;

    if (typeof selectedValue === "undefined") {
        return;
    }

    //hide all, then display only the correct one
    grievanceForm.style.display = "none";
    cameraForm.style.display = "none";
    interpreterForm.style.display = "none";

    //show and hide the correct form
    if (selectedValue === "Grievance" || selectedValue === "Reasonable Accommodation") {
        document.getElementById("bd-6410f65debc83-grievanceFormTitle").innerHTML = selectedValue;
        grievanceForm.style.display = "block";
    } else if (selectedValue === "Camera") {
        cameraForm.style.display = "block";
    } else if (selectedValue === "Interpreter") {
        interpreterForm.style.display = "block";
    }
}
