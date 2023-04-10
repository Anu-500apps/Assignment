<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto font-serif">
        <input type="search" v-model="search" class="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search..."/>
        <button type="button">Search</button>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          @click="emits('open-modal')"
          class="mt-2 block rounded-md bg-gray-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Employee
        </button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
          >
            <!-- Employe table start -->
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50 tree-table">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    S No
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Date Of Joinig
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Department
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white font-serif">
                <tr
                  v-for="(employe, index) in employeDetails"
                  :key="employe.name"
                >
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-green-900 sm:pl-6"
                  >
                    {{ index + 1 }}
                  </td>
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-green-900 sm:pl-6"
                  >
                    {{ employe.name }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ employe.age }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ employe.gender }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ employe.date_of_joining }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ employe.department }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="flex">
                      <PencilSquareIcon
                        class="h-6 w-6 text-blue-700"
                        @click="emits('edit-row', employe, index)"
                      ></PencilSquareIcon>
                      <TrashIcon
                        class="h-6 w-6 text-red-700"
                        @click="open = true"
                      ></TrashIcon>
                    </div>
                    <TransitionRoot as="template" :show="open">
                      <Dialog
                        as="div"
                        class="relative z-10"
                        @close="open = false"
                      >
                        <TransitionChild
                          as="template"
                          enter="ease-out duration-300"
                          enter-from="opacity-0"
                          enter-to="opacity-100"
                          leave="ease-in duration-200"
                          leave-from="opacity-100"
                          leave-to="opacity-0"
                        >
                          <div
                            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                          />
                        </TransitionChild>

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
                                class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
                              >
                                <div class="sm:flex sm:items-start">
                                  <div
                                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                                  >
                                    <ExclamationTriangleIcon
                                      class="h-6 w-6 text-red-600"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div
                                    class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"
                                  >
                                    <DialogTitle
                                      as="h3"
                                      class="text-base font-semibold leading-6 text-gray-900"
                                      >Are you sure ?</DialogTitle
                                    >
                                    <div class="mt-2">
                                      <p class="text-sm text-gray-500">
                                        Do You Want To Delete
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="mt-5 sm:ml-10 sm:mt-4 sm:flex sm:pl-4"
                                >
                                  <button
                                    type="button"
                                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto"
                                    @click="
                                      deleteEmploye(index), (open = false)
                                    "
                                  >
                                    Yes
                                  </button>
                                  <button
                                    type="button"
                                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0 sm:w-auto"
                                    @click="open = false"
                                    ref="cancelButtonRef"
                                  >
                                    No
                                  </button>
                                </div>
                              </DialogPanel>
                            </TransitionChild>
                          </div>
                        </div>
                      </Dialog>
                    </TransitionRoot>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Employe table -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define Import Statements
import { ref, defineProps, defineEmits } from "vue";
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
// Define Emits
const emits = defineEmits(["open-modal", "edit-row", "delete-row"]);
// Define Props
const props = defineProps({
  openSidebar: Boolean,
  employeDetails: Array,
});
const open = ref(false);


// when open click on delete on row
const deleteEmploye = (index: Number) => {
  emits("delete-row", index);
};
</script>
