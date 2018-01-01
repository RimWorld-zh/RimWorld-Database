const DeliverFoodToPrisoner: DataWorkGiver = {
  workType: 'Warden',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 70,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'DeliverFoodToPrisoner'
}

export default DeliverFoodToPrisoner;
