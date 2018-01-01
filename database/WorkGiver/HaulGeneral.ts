const HaulGeneral: DataWorkGiver = {
  workType: 'Hauling',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 10,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'HaulGeneral'
}

export default HaulGeneral;
