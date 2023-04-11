<template>
  <div>
    <CollectionsAdd
      v-if="openModal"
      @submit-form="submitEmployeForm"
    ></CollectionsAdd>
    <CollectionsList
      @open-modal="openModal = true"
      :employeDetails="employeDetails"
      @edit-row="editEmployeForm"
      @delete-row="deleteRow"
      @search-employe-details="searchEmploye"
    >
    </CollectionsList>
    <CollectionsEdit
      v-if="openEditModal"
      :prefillForm="prefillForm"
      @update-form="updateFormData"
    ></CollectionsEdit>
  </div>
</template>
<script setup>
import { useCounterStore } from "~/stores/local";
const openModal = ref(false);
const employeDetails = ref([]);
const openEditModal = ref(false);
const employeeIndex = ref(0);
const prefillForm = ref({
  name: "",
  age: "",
  gender: "",
  date_of_joining: "",
  department: "",
});

onMounted(() => {
  employees();
});

// To get Employe details
const employees = () => {
  const getEmployes = localStorage.getItem("usersList");
  if (getEmployes && getEmployes.length)
    employeDetails.value = JSON.parse(getEmployes);
};

// To submit employe form when submitform
const submitEmployeForm = (form) => {
  employeDetails.value.unshift(form);
  localStorage.setItem("usersList", JSON.stringify(employeDetails.value));
  openModal.value = false;
  filtersStore.value = form;
  console.log("filtersStore.value>>>>>>>", filtersStore.value);
};

// To prefill employee details
const editEmployeForm = (employe, index) => {
  prefillForm.value = { ...employe };
  employeeIndex.value = index;
  openEditModal.value = true;
};

// To Delete particular Row
const deleteRow = (index) => {
  employeDetails.value.splice(index, 1);
  localStorage.setItem("usersList", JSON.stringify(employeDetails.value));
};

// Updates Employe details
const updateFormData = (employee) => {
  employeDetails.value.find((item, index) => {
    if (employeeIndex.value == index) {
      item.name = employee.name;
      item.age = employee.age;
      item.gender = employee.gender;
      item.date_of_joining = employee.date_of_joining;
      item.department = employee.department;
    }
    localStorage.setItem("usersList", JSON.stringify(employeDetails.value));
  });
  openEditModal.value = false;
};

const searchEmploye = (results) => {
  if (results && results.length) employeDetails.value = results;
};
</script>
