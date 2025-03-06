<template>
    <v-footer class="d-flex flex-column align-center py-4" dark :class="{ 'fixed-footer': isDesktop }">
        <v-container class="text-center">
            <span>&copy; {{ new Date().getFullYear() }} Code With Nitesh</span>
            <v-btn text color="primary" @click="showDialog = true">
                Contact Me
            </v-btn>
        </v-container>

        <!-- Contact Us Modal -->
        <v-dialog v-model="showDialog" max-width="800px">
            <v-card>
                <v-card-title class="headline">Contact Us</v-card-title>
                <v-card-text>
                    <v-form ref="form" v-model="valid">
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="contact.name" label="Name" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="contact.email" label="Email" type="email"
                                    required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-text-field v-model="contact.mobileNumber" label="Mobile Number" type="tel"
                            required></v-text-field>
                        <v-text-field v-model="contact.subject" label="Subject" required></v-text-field>
                        <v-textarea v-model="contact.body" label="Message" required></v-textarea>
                        <v-text-field v-model="contact.createdDate" label="Date" disabled></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="grey" @click="showDialog = false">Cancel</v-btn>
                    <v-btn color="primary" :disabled="!valid" @click="submitForm">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            showDialog: false,
            valid: false,
            contact: {
                name: '',
                email: '',
                mobileNumber: '',
                subject: '',
                body: '',
                createdDate: new Date().toISOString().slice(0, 10), // Format YYYY-MM-DD
            },
        };
    },
    methods: {
        submitForm() {
            if (this.$refs.form.validate()) {
                console.log('Submitted Data:', this.contact);
                this.showDialog = false;
                this.resetForm();
            }
        },
        resetForm() {
            this.contact = {
                name: '',
                email: '',
                mobileNumber: '',
                subject: '',
                body: '',
                createdDate: new Date().toISOString().slice(0, 10),
            };
        },
    },
    computed: {
        isDesktop() {
            return window.innerWidth > 600; // Adjust breakpoint as needed
        },
    },
};
</script>

<style scoped>
.v-footer {
    width: 100%;
    text-align: center;
}
</style>