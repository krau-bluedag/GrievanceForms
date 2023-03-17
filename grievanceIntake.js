function initGrievanceForm() {
    //build Grievance form
    let grievanceTemplate = `
        <style>
            .bd-641368827177c-control-group {
                display: block;
                margin-bottom: 24px;
            }
            .bd-641368827177c-control-label {
                float: left;
                width: 170px;
                padding-top: 5px;
                text-align: right;
            }
            .bd-641368827177c-controls {
                margin-left: 180px;
                padding-top: 5px;
            }
            #bd-641368827177c-grievanceForm.validated input:invalid,
            #bd-641368827177c-grievanceForm.validated select:invalid,
            #bd-641368827177c-raCameraForm.validated input:invalid,
            #bd-641368827177c-raCameraForm.validated select:invalid,
            #bd-641368827177c-raInterpreterForm.validated input:invalid,
            #bd-641368827177c-raInterpreterForm.validated select:invalid
            {
                border: 1px solid red;
            }
            .bd-641368827177c-required-label {
                color: red;
            }
        </style>
        <div id="bd-641368827177c-formSelector">
            <div>
                <label for="bd-641368827177c-RAProgramType" class=""><span class="bd-641368827177c-required-label">*</span> Reasonable Accommodation Program Type:</label>
                <div style="padding: 10px 0;">
                    <span>
                        <select name="cf_RAProgramType" id="bd-641368827177c-RAProgramType" required>
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
        <form id="bd-641368827177c-grievanceForm" accept-charset="utf-8" style="display:none;">
            <input type="hidden" name="RequestTypeID" id="bd-641368827177c-RequestTypeID" value="3" />
            <h3 id="bd-641368827177c-grievanceFormTitle">Grievance</h3>
            <div>
                <h4>Requester Information</h4>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-RequesterName" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> Name:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="RequesterName" value="" id="bd-641368827177c-RequesterName" required />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-RequesterPhone" class="bd-641368827177c-control-label">Phone Number:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="tel" name="RequesterPhone" value="" id="bd-641368827177c-RequesterPhone" />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-RequesterEmail" class="bd-641368827177c-control-label">Email:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="email" name="RequesterEmail" value="" id="bd-641368827177c-RequesterEmail" />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label class="bd-641368827177c-control-label">Is submitter different:</label>
                    <div class="bd-641368827177c-controls">
                        <label class="radio"><input type="radio" name="SubmitterDifferent" value="yes" id="bd-641368827177c-SubmitterDifferent_Yes" /> Yes</label>
                        <label class="radio"><input type="radio" name="SubmitterDifferent" value="no" id="bd-641368827177c-SubmitterDifferent_No" checked /> No</label>
                    </div>
                </div>
                <div id="bd-641368827177c-submitterDetails" style="display: none;">
                    <hr />
                    <h4>Submitter Information</h4>
                    <div class="bd-641368827177c-control-group">
                        <label for="bd-641368827177c-SubmitterName" class="bd-641368827177c-control-label">Name:</label>
                        <div class="bd-641368827177c-controls">
                            <input type="text" name="SubmitterName" value="" id="bd-641368827177c-SubmitterName" />
                        </div>
                    </div>
                    <div class="bd-641368827177c-control-group">
                        <label for="bd-641368827177c-SubmitterPhone" class="bd-641368827177c-control-label">Phone Number:</label>
                        <div class="bd-641368827177c-controls">
                            <input type="tel" name="SubmitterPhone" value="" id="bd-641368827177c-SubmitterPhone" />
                        </div>
                    </div>
                    <div class="bd-641368827177c-control-group">
                        <label for="bd-641368827177c-SubmitterEmail" class="bd-641368827177c-control-label">Email:</label>
                        <div class="bd-641368827177c-controls">
                            <input type="email" name="SubmitterEmail" value="" id="bd-641368827177c-SubmitterEmail" />
                        </div>
                    </div>
                    <div class="bd-641368827177c-control-group" style="margin-bottom: 10px;">
                        <label for="bd-641368827177c-SubmitterTitle" class="bd-641368827177c-control-label">Relationship to Requester:</label>
                        <div class="bd-641368827177c-controls">
                            <input type="text" name="SubmitterTitle" value="" id="bd-641368827177c-SubmitterTitle" />
                        </div>
                    </div><br />
                </div>
                <hr />
                <h4>Location Information</h4>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-LocationAddress" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> Location:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="LocationAddress" value="" id="bd-641368827177c-LocationAddress" required />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-ActualAddress" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> Address:</label>
                    <div class="bd-641368827177c-controls">
                        <span>
                            <input type="text" name="ActualAddress" value="" id="bd-641368827177c-ActualAddress" required />
                        </span>
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> City/State/Zip:</label>
                    <div class="bd-641368827177c-controls">
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-641368827177c-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-641368827177c-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-641368827177c-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-LocationNote" class="bd-641368827177c-control-label">Location Notes:</label>
                    <div class="bd-641368827177c-controls">
                        <textarea name="LocationNote" cols="40" rows="3" id="bd-641368827177c-LocationNote"></textarea>
                    </div>
                </div>
                <hr />
                <h4>Request Information</h4>
                <div class="bd-641368827177c-control-group">
                    <label class="bd-641368827177c-control-label">Is this ADA-related:</label>
                    <div class="bd-641368827177c-controls">
                        <label><input type="radio" name="ADAGrievance" value="1" /> Yes</label>
                        <label><input type="radio" name="ADAGrievance" value="0" /> No</label>
                        <label><input type="radio" name="ADAGrievance" value="-1" checked="checked" /> Undetermined</label>
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label class="bd-641368827177c-control-label" for="bd-641368827177c-IncidentDate">Date of Incident:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="date" size="16" name="IncidentDate" id="bd-641368827177c-IncidentDate" />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-RequestReason" class="bd-641368827177c-control-label">Nature of Request:</label>
                    <div class="bd-641368827177c-controls">
                        <textarea name="RequestReason" cols="40" rows="3" id="bd-641368827177c-RequestReason"></textarea>
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-Notes" class="bd-641368827177c-control-label">Notes:</label>
                    <div class="bd-641368827177c-controls">
                        <textarea name="Notes" cols="40" rows="3" id="bd-641368827177c-Notes"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button id="bd-641368827177c-grievanceFormSubmitBtn">Submit</button>
            </div>
        </form>
        <form id="bd-641368827177c-raCameraForm" accept-charset="utf-8" style="display:none;">
            <input type="hidden" name="RequestTypeID" value="4" />
            <h3>Audio/Video Recording Request</h3>
            <div>
                <p>Consistent with La. R.S. 17:1948, a parent or legal guardian may request the installation of an audio and video camera in a special education self-contained classroom or other special education setting. For more information, please visit the Exceptional Student Services webpage. This request will be in effect for one academic year.</p>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raCameraForm-AcademicYear" class="bd-641368827177c-control-label">Year:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="cf_AcademicYear" value="" id="bd-641368827177c-raCameraForm-AcademicYear" />
                    </div>
                </div>
                <h3>Requestor Information:</h3>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raCameraForm-RequesterName" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> Name:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="RequesterName" value="" id="bd-641368827177c-raCameraForm-RequesterName" required />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raCameraForm-RequesterPhone" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> Phone Number:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="tel" name="RequesterPhone" value="" id="bd-641368827177c-raCameraForm-RequesterPhone" required />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raCameraForm-RequesterEmail" class="bd-641368827177c-control-label">Email:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="email" name="RequesterEmail" value="" id="bd-641368827177c-raCameraForm-RequesterEmail" />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label class="bd-641368827177c-control-label">Relationship to child:</label>
                    <div class="bd-641368827177c-controls">
                        <label class="radio"><input type="radio" name="cf_RelationshipToChild" value="parents" /> Parent(s)</label>
                        <label class="radio"><input type="radio" name="cf_RelationshipToChild" value="legal guardian" /> Legal Guardian(s)</label>
                        <label class="radio"><input type="radio" name="cf_RelationshipToChild" value="adult student" /> Adult Student</label>
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raCameraForm-ChildName" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> Child's full name:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="cf_ChildName" value="" id="bd-641368827177c-raCameraForm-ChildName" required />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raCameraForm-Dob" class="bd-641368827177c-control-label">Date of Birth:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="date" size="16" name="cf_Dob" value="" id="bd-641368827177c-raCameraForm-Dob" />
                    </div>
                </div>
                <h3>School Information:</h3>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raCameraForm-LocationAddress" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> School:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="LocationAddress" value="" id="bd-641368827177c-raCameraForm-LocationAddress" required />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raCameraForm-ActualAddress" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> Address:</label>
                    <div class="bd-641368827177c-controls">
                        <span>
                            <input type="text" name="ActualAddress" value="" id="bd-641368827177c-raCameraForm-ActualAddress" required />
                        </span>
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> City/State/Zip:</label>
                    <div class="bd-641368827177c-controls">
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-641368827177c-raCameraForm-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-641368827177c-raCameraForm-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-641368827177c-raCameraForm-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raCameraForm-Grade" class="bd-641368827177c-control-label">Grade:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="cf_Grade" value="" id="bd-641368827177c-raCameraForm-Grade" />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raCameraForm-RoomNumber" class="bd-641368827177c-control-label">Classroom / Room Number:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="cf_RoomNumber" value="" id="bd-641368827177c-raCameraForm-RoomNumber" />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raCameraForm-Teacher" class="bd-641368827177c-control-label">Teacher's name:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="cf_Teacher" value="" id="bd-641368827177c-raCameraForm-Teacher" />
                    </div>
                </div>
            </div>
            <div>
                <button id="bd-641368827177c-raCameraSubmitBtn">Submit</button>
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
        <form id="bd-641368827177c-raInterpreterForm" accept-charset="utf-8" style="display:none;">
            <input type="hidden" name="RequestTypeID" value="4" />
            <h3>Interpreting Service Request</h3>
            <div>
                <h4>Requester Information</h4>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-RequesterName" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> Name:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="RequesterName" value="" id="bd-641368827177c-raInterpreterForm-RequesterName" required />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-RequesterPhone" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> Phone Number:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="tel" name="RequesterPhone" value="" id="bd-641368827177c-raInterpreterForm-RequesterPhone" required />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-RequesterEmail" class="bd-641368827177c-control-label">Email:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="email" name="RequesterEmail" value="" id="bd-641368827177c-raInterpreterForm-RequesterEmail" />
                    </div>
                </div>
                <h4>Contact Information</h4>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-SubmitterName" class="bd-641368827177c-control-label">Contact Person/Doctor:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="SubmitterName" value="" id="bd-641368827177c-raInterpreterForm-SubmitterName" />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-SubmitterEmail" class="bd-641368827177c-control-label">Contact Email:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="email" name="SubmitterEmail" value="" id="bd-641368827177c-raInterpreterForm-SubmitterEmail" />
                    </div>
                </div>
                <h4>Location Information</h4>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-LocationAddress" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> Location:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="" value="" id="bd-641368827177c-raInterpreterForm-LocationAddress" required />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-ActualAddress" class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> Address:</label>
                    <div class="bd-641368827177c-controls">
                        <span>
                            <input type="text" name="ActualAddress" value="" id="bd-641368827177c-raInterpreterForm-ActualAddress" required />
                        </span>
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label class="bd-641368827177c-control-label"><span class="bd-641368827177c-required-label">*</span> City/State/Zip:</label>
                    <div class="bd-641368827177c-controls">
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-641368827177c-raInterpreterForm-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-641368827177c-raInterpreterForm-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>
                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-641368827177c-raInterpreterForm-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-FloorNumber" class="bd-641368827177c-control-label">Floor Number:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="cf_FloorNumber" value="" id="bd-641368827177c-raInterpreterForm-FloorNumber" />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-RoomNumber" class="bd-641368827177c-control-label">Suite Number:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="cf_RoomNumber" value="" id="bd-641368827177c-raInterpreterForm-RoomNumber" />
                    </div>
                </div>
                <h4>Client Information</h4>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-ChildName" class="bd-641368827177c-control-label">Client/Patient:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="text" name="cf_ChildName" value="" id="bd-641368827177c-raInterpreterForm-ChildName" />
                    </div>
                </div>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-Dob" class="bd-641368827177c-control-label">Date of Birth:</label>
                    <div class="bd-641368827177c-controls">
                        <input type="date" size="16" name="cf_Dob" value="" id="bd-641368827177c-raInterpreterForm-Dob" />
                    </div>
                </div>
                <h4>Additional Information</h4>
                <div class="bd-641368827177c-control-group">
                    <label for="bd-641368827177c-raInterpreterForm-Notes" class="bd-641368827177c-control-label">Notes:</label>
                    <div class="bd-641368827177c-controls">
                        <textarea name="Notes" cols="40" rows="3" id="bd-641368827177c-raInterpreterForm-Notes"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button id="bd-641368827177c-raInterpreterSubmitBtn">Submit</button>
            </div>
        </form>
    `;
    document.getElementById("bd-grievance").innerHTML = grievanceTemplate;

    //add listeners
    document.getElementById("bd-641368827177c-RAProgramType").addEventListener("change", swapGrievanceForms);
    document.getElementById("bd-641368827177c-grievanceFormSubmitBtn").addEventListener("click", submitGrievanceForm);
    document.getElementById("bd-641368827177c-raCameraSubmitBtn").addEventListener("click", submitGrievanceForm);
    document.getElementById("bd-641368827177c-raInterpreterSubmitBtn").addEventListener("click", submitGrievanceForm);
    document.getElementById("bd-641368827177c-SubmitterDifferent_Yes").addEventListener("change", submitterDifferent);
    document.getElementById("bd-641368827177c-SubmitterDifferent_No").addEventListener("change", submitterDifferent);
}
initGrievanceForm();

function submitGrievanceForm(e) {
    e.preventDefault();

    const selectedForm = document.getElementById("bd-641368827177c-RAProgramType").value;
    let formId = false;

    if (selectedForm === "Grievance" || selectedForm === "Reasonable Accommodation") {
        formId = "grievanceForm";
        document.getElementById("bd-641368827177c-RequestTypeID").value = selectedForm === "Grievance" ? 3 : 4;
    } else if (selectedForm === "Camera") {
        formId = "raCameraForm";
    } else if (selectedForm === "Interpreter") {
        formId = "raInterpreterForm";
    }

    if (!formId) {
        return;
    }

    const form = document.getElementById("bd-641368827177c-" + formId);
    form.classList.add('validated');
    if (form.checkValidity()) {
        const formFields = document.getElementById("bd-641368827177c-" + formId).elements;
        let postObj = {};
        let customFields = {};
        for (let i = 0; i < formFields.length; i++) {
            const item = formFields.item(i);
            if (item.name) {
                if (item.name.startsWith('cf_')) {
                    customFields[item.name.substring(3)] = item.value;
                } else {
                    postObj[item.name] = item.value;
                }
            }
        }
        customFields['RAProgramType'] = selectedForm;
        postObj['CustomFields'] = customFields;

        //POST to BlueDAG API
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    document.getElementById("bd-grievance").innerHTML = "Your grievance has been submitted.";
                } else {
                    let failureContent = "An error occurred while submitting your grievance. Please try again later. <button onclick=\"window.location.reload()\">Retry</button>";
                    document.getElementById("bd-grievance").innerHTML = failureContent;
                }
            }
        };
        xhr.open("POST", "https:\/\/api.bluedag.com\/js\/grievance\/submit?jsAuth=9t5dioDO9dnA92TNYXpErh9gsF3mvTxVJEjw2O0NOMGLz9DiY4q4uuFFThyNvDPy");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(postObj));

        document.getElementById("bd-grievance").innerHTML = "Submitting your grievance...";
    } else {
        console.log("Form validation failed. Ensure all required form fields are completed.");
    }
}

function submitterDifferent(e) {
    const isSubmitterDifferent = e.target.value;
    if (typeof isSubmitterDifferent !== "undefined") {
        let submitterFields = document.getElementById("bd-641368827177c-submitterDetails");
        if (typeof submitterFields !== "undefined") {
            submitterFields.style.display = isSubmitterDifferent == "yes" ? "block" : "none";
        }
    }
}

function swapGrievanceForms() {
    //get forms
    const grievanceForm = document.getElementById("bd-641368827177c-grievanceForm");
    const cameraForm = document.getElementById("bd-641368827177c-raCameraForm");
    const interpreterForm = document.getElementById("bd-641368827177c-raInterpreterForm");

    //get the value of the request type
    const selectedValue = document.getElementById("bd-641368827177c-RAProgramType").value;

    if (typeof selectedValue === "undefined") {
        return;
    }

    grievanceForm.style.display = "none";
    cameraForm.style.display = "none";
    interpreterForm.style.display = "none";

    //show and hide the correct form
    if (selectedValue === "Grievance" || selectedValue === "Reasonable Accommodation") {
        document.getElementById("bd-641368827177c-grievanceFormTitle").innerHTML = selectedValue;
        grievanceForm.style.display = "block";
    } else if (selectedValue === "Camera") {
        cameraForm.style.display = "block";
    } else if (selectedValue === "Interpreter") {
        interpreterForm.style.display = "block";
    }
}
