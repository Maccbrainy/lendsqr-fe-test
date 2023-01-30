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
    return (
        <div className="UserDetailsGeneralDetails">
            <div className="details-section">
              <h1 className="header-title">Personal Information</h1>
              <div className="detailed-contact personal-section">
                <DetailContactSlot headerTitle="Full name" headerText={'Grace Effiong'} />
                <DetailContactSlot headerTitle="Phone Number" headerText={'09012345678'} />
                <DetailContactSlot headerTitle="Email Address" headerText={'grace@gmail.com'} />
                <DetailContactSlot headerTitle="BVN" headerText={'09012345678'} />
                <DetailContactSlot headerTitle="Gender" headerText="Grace Effiong" />
                <DetailContactSlot headerTitle="Marital Status" headerText={'09012345678'} />
                <DetailContactSlot headerTitle="Children" headerText={'None'} />
                <DetailContactSlot headerTitle="Type of Residence" headerText={'Parent\'s Apartment'} />
                </div>
            </div>
            <div className="horizontal-divider"></div>
            <div className="details-section">
              <h1 className="header-title">Education and Employment</h1>
              <div className="detailed-contact education-section">
                <DetailContactSlot headerTitle="Level of Eduaction" headerText={'B. Sc'} />
                <DetailContactSlot headerTitle="Employment" headerText={'Employed'} />
                <DetailContactSlot headerTitle="Sector of Employment" headerText={'FinTech'} />
                <DetailContactSlot headerTitle="Duration of Employment" headerText={'2 year'} />
                <DetailContactSlot headerTitle="Office Email" headerText="grace@lendsqr.com" />
                <DetailContactSlot headerTitle="Monthly Incone Status" headerText={'N200,000 - N 400, 000'} />
                <DetailContactSlot headerTitle="Loan Repayment" headerText={'40, 000'} />
                </div>
            </div>
            <div className="horizontal-divider"></div>
            <div className="details-section">
              <h1 className="header-title">Socials</h1>
              <div className="detailed-contact social-section">
                <DetailContactSlot headerTitle="Twitter" headerText={'B. Sc'} />
                <DetailContactSlot headerTitle="Facebook" headerText={'FinTech'} />
                <DetailContactSlot headerTitle="Instagram" headerText={'2 year'} />
              </div>
            </div>
            <div className="horizontal-divider"></div>
            <div className="details-section">
              <h1 className="header-title">Guarantor</h1>
              <div className="detailed-contact guarantor-section">
                <DetailContactSlot headerTitle="Full name" headerText={'B. Sc'} />
                <DetailContactSlot headerTitle="Phone Number" headerText={'FinTech'} />
                <DetailContactSlot headerTitle="Email Address" headerText={'2 year'} />
                <DetailContactSlot headerTitle="RelationShip" headerText={'2 year'} />
              </div>
            </div>
            <div className="horizontal-divider"></div>
            <div className="details-section">
              {/* <h1 className="header-title">Guarantor</h1> */}
              <div className="detailed-contact guarantor-section">
                <DetailContactSlot headerTitle="Full name" headerText={'B. Sc'} />
                <DetailContactSlot headerTitle="Phone Number" headerText={'FinTech'} />
                <DetailContactSlot headerTitle="Email Address" headerText={'2 year'} />
                <DetailContactSlot headerTitle="RelationShip" headerText={'2 year'} />
              </div>
            </div>
        </div>
    )
}