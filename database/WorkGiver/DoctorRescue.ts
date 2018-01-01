const DoctorRescue: DataWorkGiver = {
  workType: 'Doctor',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 90,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'DoctorRescue'
}

export default DoctorRescue;
