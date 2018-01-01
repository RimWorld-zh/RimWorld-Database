const DoctorTendToSelf: DataWorkGiver = {
  workType: 'Doctor',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 65,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'DoctorTendToSelf'
}

export default DoctorTendToSelf;
