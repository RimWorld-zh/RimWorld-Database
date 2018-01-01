const DoctorTendEmergency: DataWorkGiver = {
  workType: 'Doctor',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 100,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'DoctorTendEmergency'
}

export default DoctorTendEmergency;
