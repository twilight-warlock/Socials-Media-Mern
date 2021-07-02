import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import Loading from "../layout/Loading";

const EditProfile = ({
	createProfile,
	history,
	getCurrentProfile,
	profile: { profile, loading },
}) => {
	const [formData, setformData] = useState({
		headline: "",
		summary: "",
		location: "",
		website: "",
		skills: "",
		githubUsername: "",
		youtube: "",
		twitter: "",
		instagram: "",
		linkedin: "",
		medium: "",
		devto: "",
		facebook: "",
	});

	useEffect(() => {
		getCurrentProfile();

		setformData({
			headline: loading || !profile.headline ? "" : profile.headline,
			summary: loading || !profile.summary ? "" : profile.summary,
			location: loading || !profile.location ? "" : profile.location,
			website: loading || !profile.website ? "" : profile.website,
			skills: loading || !profile.skills ? "" : profile.skills,
			githubUsername:
				loading || !profile.githubUsername ? "" : profile.githubUsername,
			youtube: loading || !profile.social.youtube ? "" : profile.social.youtube,
			twitter: loading || !profile.social.twitter ? "" : profile.social.twitter,
			instagram:
				loading || !profile.social.instagram ? "" : profile.social.instagram,
			linkedin:
				loading || !profile.social.linkedin ? "" : profile.social.linkedin,
			medium: loading || !profile.social.medium ? "" : profile.social.medium,
			devto: loading || !profile.social.devto ? "" : profile.social.devto,
			facebook:
				loading || !profile.social.facebook ? "" : profile.social.facebook,
		});
	}, [loading, getCurrentProfile]);

	const [social, setsocial] = useState(false);

	const {
		headline,
		summary,
		location,
		website,
		skills,
		githubUsername,
		youtube,
		twitter,
		instagram,
		linkedin,
		medium,
		devto,
		facebook,
	} = formData;

	const onChange = (e) =>
		setformData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();

		createProfile(formData, history, true);
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<>
			<h1 className="supaBig text-primary">Edit Your Profile</h1>
			<p className="head">
				<i className="fa fa-user"></i> Let's update your information
			</p>
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<label htmlFor="headline">
						Headline <span className="badge badge-danger">*</span>{" "}
					</label>
					<select
						name="headline"
						className="w-75 d-block p-1"
						id="headline"
						value={headline}
						onChange={(e) => onChange(e)}
					>
						<option valiue="0">Select Professional Status</option>
						<option value="Developer">Developer</option>
						<option value="Junior Developer">Junior Developer</option>
						<option value="Senior Developer">Senior Developer</option>
						<option value="Manager">Manager</option>
						<option value="Student or Learning">Student or Learning</option>
						<option value="Instructor">Instructor or Teacher</option>
						<option value="Intern">Intern</option>
						<option value="Other">Other</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="website">Website</label>
					<input
						id="website"
						type="text"
						placeholder="www.yourwebsite.com"
						name="website"
						className="w-75 p-1 d-block"
						value={website}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="location">Location</label>
					<input
						id="location"
						type="text"
						placeholder="ex. Mumbai, India"
						name="location"
						className="w-75 p-1 d-block"
						value={location}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="skills">Skills</label>
					<input
						type="text"
						id="skills"
						placeholder="ex. HTML,CSS,JavaScript,PHP"
						name="skills"
						className="w-75 p-1 d-block"
						value={skills}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="github">Github username</label>
					<input
						id="github"
						type="text"
						placeholder="ex. android"
						name="githubUsername"
						className="w-75 p-1 d-block"
						value={githubUsername}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="summary">Summary</label>
					<textarea
						id="summary"
						placeholder="A short bio of yourself"
						className="w-75 p-1 d-block"
						name="summary"
						value={summary}
						onChange={(e) => onChange(e)}
					></textarea>
				</div>

				<div className="my-2">
					<button
						type="button"
						className="btn btn-dark"
						onClick={() => setsocial(!social)}
					>
						Add Social Network Links
					</button>
				</div>

				{social && (
					<>
						<div className="form-group social-input mt-3">
							<i className="fa fa-twitter fa-2x"></i>
							<input
								type="text"
								placeholder="Twitter URL"
								name="twitter"
								className="w-75 ml-2 p-1"
								value={twitter}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className="form-group social-input">
							<i className="fab fa-facebook fa-2x"></i>
							<input
								type="text"
								placeholder="Facebook URL"
								name="facebook"
								className="w-75 ml-2 p-1"
								value={facebook}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className="form-group social-input">
							<i className="fab fa-youtube fa-2x "></i>
							<input
								type="text"
								placeholder="YouTube URL"
								name="youtube"
								className="w-75 ml-2 p-1"
								value={youtube}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className="form-group social-input">
							<i className="fab fa-linkedin fa-2x "></i>
							<input
								type="text"
								placeholder="Linkedin URL"
								name="linkedin"
								className="w-75 ml-2 p-1"
								value={linkedin}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className="form-group social-input">
							<i className="fab fa-instagram fa-2x"></i>
							<input
								type="text"
								placeholder="Instagram URL"
								name="instagram"
								className="w-75 ml-2 p-1"
								value={instagram}
								onChange={(e) => onChange(e)}
							/>
						</div>
						<div className="form-group social-input">
							<i className="fab fa-medium fa-2x"></i>
							<input
								type="text"
								placeholder="medium URL"
								name="medium"
								className="w-75 ml-2 p-1"
								value={medium}
								onChange={(e) => onChange(e)}
							/>
						</div>
						<div className="form-group social-input">
							<i className="fab fa-dev fa-2x"></i>
							<input
								type="text"
								placeholder="devto URL"
								name="devto"
								className="w-75 ml-2 p-1"
								value={devto}
								onChange={(e) => onChange(e)}
							/>
						</div>
					</>
				)}

				<input type="submit" className="btn btn-primary my-1" />
				<Link className="btn btn-secondary mx-1" to="/dashboard">
					Go Back
				</Link>
			</form>
		</>
	);
};

EditProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(EditProfile)
);
