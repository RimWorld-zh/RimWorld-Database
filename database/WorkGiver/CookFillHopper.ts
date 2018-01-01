const CookFillHopper: DataWorkGiver = {
  workType: 'Cooking',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 50,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'CookFillHopper'
}

export default CookFillHopper;
