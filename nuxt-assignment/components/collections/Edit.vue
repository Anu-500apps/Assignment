<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div>
                <h4>Edit Employee</h4>
                <!-- Start employe Form -->
                <form @submit.prevent>
                  <div
                    class="relative mt-6 flex-1 px-4 sm:px-6 border ml-2 mr-2"
                  >
                    <div class="mt-2">
                      <label
                        for="name"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Name</label
                      >
                      <div class="mt-2">
                        <input
                          id="name"
                          v-model="prefillForm.name"
                          class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div class="mt-2">
                      <label
                        for="age"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Age</label
                      >
                      <div class="mt-2">
                        <input
                          placeholder="Enter age"
                          id="age"
                          v-model="prefillForm.age"
                          type="number"
                          class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div class="mt-2">
                      <label
                        for="gender"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >gender</label
                      >
                      <div class="mt-2">
                        <select
                          v-model="prefillForm.gender"
                          id="gender"
                          name="gender"
                          class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div class="mt-2">
                      <label
                        for="date"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Date Of Joining
                      </label>
                      <div class="mt-2">
                        <input
                          type="date"
                          id="date"
                          v-model="prefillForm.date_of_joining"
                          class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Select Date"
                        />
                      </div>
                    </div>
                    <div class="mt-2">
                      <label
                        for="name"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Department</label
                      >
                      <div class="mt-2">
                        <select
                          v-model="prefillForm.department"
                          id="department"
                          name="department"
                          class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value="Accounts">Accounts</option>
                          <option value="Admin">Admin</option>
                          <option value="IT">IT</option>
                        </select>
                      </div>
                    </div>
                    <div class="mt-2">
                      <div class="mt-2 mb-2 ml-4 flex">
                        <div>
                          <button
                            @click="open = false"
                            class="mr-1 rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                        </div>
                        <div>
                          <button
                            type="submit"
                            class="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            @click="updateEmployeForm()"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- End update employe Form -->
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
// Define Props
const open = ref(true);
const props = defineProps({
  open: Boolean,
  prefillForm: Object,
});
// Define Emits
const emits = defineEmits(["update-form"]);

// To update employe Details
const updateEmployeForm = () => {
  emits("update-form", props.prefillForm);
  open.value =false
};
</script>
