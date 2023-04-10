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
    >
    </CollectionsList>
    <CollectionsEdit
      v-if="openEditModal"
      :prefillForm="prefillForm"
    ></CollectionsEdit>
  </div>
</template>
<script setup>
import { useCounterStore } from "~/stores/local";
const openModal = ref(false);
const employeDetails = ref([]);
const openEditModal = ref(false);
const prefillForm = ref({
  name: "",
  age: "",
  selected: "",
  date_of_joining: "",
  department: "",
});

onMounted(() => {
  employees();
});

// To get Employe details
const employees = () => {
  const getEmployes = localStorage.getItem("usersList");
  employeDetails.value = JSON.parse(getEmployes);
};

// To submit employe form when submitform
const submitEmployeForm = (form) => {
  employeDetails.value.push(form);
  localStorage.setItem("usersList", JSON.stringify(employeDetails.value));
};

// To prefill employee details
const editEmployeForm = (employe) => {
  prefillForm.value = { ...employe };
  openEditModal.value = true;
};

// To Delete particular Row
const deleteRow = (index) => {
  employeDetails.value.splice(index, 1);
  localStorage.setItem("usersList", JSON.stringify(employeDetails.value));
};
</script>
