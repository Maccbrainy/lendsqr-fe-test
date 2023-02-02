interface DetailInfo {
    headerTitle: string,
    headerText: string
}
const DetailContactSlot = ({headerTitle, headerText}: DetailInfo) => {
    return (
        <div className="slot">
            <span className="header-title">{headerTitle}</span>
            <span className="text">{headerText}</span>
        </div>
    )
}
export default function UserDetailsGeneralDetails(){
  const generalUserDetails = JSON.parse(localStorage.getItem("LENDSQR_USERDETAIL") || "{}");
  const {profile, education, guarantor, socials} = generalUserDetails;
  
    return (
        <div className="UserDetailsGeneralDetails">
            <div className="details-section">
              <h1 className="header-title">Personal Information</h1>
              <div className="detailed-contact personal-section">
                <DetailContactSlot headerTitle="Full name" headerText={`${profile.firstName} ${profile.lastName}`} />
                <DetailContactSlot headerTitle="Phone Number" headerText={profile.phoneNumber} />
                <DetailContactSlot headerTitle="Email Address" headerText={generalUserDetails.email} />
                <DetailContactSlot headerTitle="BVN" headerText={profile.bvn} />
                <DetailContactSlot headerTitle="Gender" headerText={profile.gender} />
                <DetailContactSlot headerTitle="Marital Status" headerText={"N/A"} />
                <DetailContactSlot headerTitle="Children" headerText={"N/A"} />
                <DetailContactSlot headerTitle="Type of Residence" headerText={"N/A"} />
                </div>
            </div>
            <div className="horizontal-divider"></div>
            <div className="details-section">
              <h1 className="header-title">Education and Employment</h1>
              <div className="detailed-contact education-section">
                <DetailContactSlot headerTitle="Level of Eduaction" headerText={education.level} />
                <DetailContactSlot headerTitle="Employment" headerText={education.employmentStatus} />
                <DetailContactSlot headerTitle="Sector of Employment" headerText={education.sector} />
                <DetailContactSlot headerTitle="Duration of Employment" headerText={education.duration} />
                <DetailContactSlot headerTitle="Office Email" headerText={education.officeEmail} />
                <DetailContactSlot headerTitle="Monthly Income Status" headerText={`${profile.currency} ${education.monthlyIncome[1]} - ${profile.currency} ${education.monthlyIncome[0]}`} />
                <DetailContactSlot headerTitle="Loan Repayment" headerText={`${profile.currency} ${education.loanRepayment}`} />
                </div>
            </div>
            <div className="horizontal-divider"></div>
            <div className="details-section">
              <h1 className="header-title">Socials</h1>
              <div className="detailed-contact social-section">
                <DetailContactSlot headerTitle="Twitter" headerText={socials.twitter} />
                <DetailContactSlot headerTitle="Facebook" headerText={socials.facebook} />
                <DetailContactSlot headerTitle="Instagram" headerText={socials.instagram} />
              </div>
            </div>
            <div className="horizontal-divider"></div>
            <div className="details-section">
              <h1 className="header-title">Guarantor</h1>
              <div className="detailed-contact guarantor-section">
                <DetailContactSlot headerTitle="Full name" headerText={`${guarantor.firstName} ${guarantor.lastName}`} />
                <DetailContactSlot headerTitle="Phone Number" headerText={guarantor.phoneNumber} />
                <DetailContactSlot headerTitle="Address" headerText={guarantor.address} />
                <DetailContactSlot headerTitle="Gender" headerText={guarantor.gender} />
                <DetailContactSlot headerTitle="RelationShip" headerText={"N/A"} />
              </div>
            </div>
        </div>
    )
}