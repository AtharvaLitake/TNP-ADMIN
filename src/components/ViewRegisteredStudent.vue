<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/valid-v-slot -->
<template>
    <nav-drawer></nav-drawer>
    <v-container class="px-15">
        <h1 class="text-h5 font-weight-bold text-primary mb-3">Check Student Details</h1>
        <p class="text-justify text-subtitle-1" style="color: rgba(8, 30, 127, 0.6)">
            Through this page, you can send notices about placement opportunities to
            all individuals, ensuring they stay informed about upcoming recruitment
            drives and job openings.
        </p>
        <v-data-table :headers="table_headers" :items="students" class="text-left text-primary">
            <template v-slot:item.actions="{ item }">
                <v-btn color="primary">View Student Details</v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import NavDrawer from '../BaseComponents/NavDrawer.vue';
export default {
    components: {
        'nav-drawer': NavDrawer
    },
    data() {
        return {
            students: [
                {
                    id: 1,
                    name: 'Atharva Litake',
                    registration_number: 'C2K21106776',
                    university_prn: '72278822D',
                },
                {
                    id: 2,
                    name: 'Atharva Litake',
                    registration_number: 'C2K21106776',
                    university_prn: '72278822D',
                },
                {
                    id: 3,
                    name: 'Atharva Litake',
                    registration_number: 'C2K21106776',
                    university_prn: '72278822D',
                },
                {
                    id: 4,
                    name: 'Atharva Litake',
                    registration_number: 'C2K21106776',
                    university_prn: '72278822D',
                },
                {
                    id: 5,
                    name: 'Atharva Litake',
                    registration_number: 'C2K21106776',
                    university_prn: '72278822D',
                },
                {
                    id: 6,
                    name: 'Atharva Litake',
                    registration_number: 'C2K21106776',
                    university_prn: '72278822D',
                },
                {
                    id: 7,
                    name: 'Atharva Litake',
                    registration_number: 'C2K21106776',
                    university_prn: '72278822D',
                },
            ],

            table_headers: [
                { title: 'Student Name', key: 'name' },
                { title: 'Registration Number', key: 'registration_number' },
                { title: 'University PRN Number', key: 'university_prn' },
                { title: 'Actions', key: 'actions' },
            ],
        };
    }
};
</script>
