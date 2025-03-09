<template>
    <v-footer class="d-flex flex-column align-center py-4" dark :class="{ 'fixed-footer': isDesktop }">
        <v-container class="text-center">
            <span>&copy; {{ new Date().getFullYear() }} Code With Nitesh</span>
            <v-btn text :class="{ 'ml-2': isDesktop }" color="primary" @click="showDialog = true">
                Contact Me
            </v-btn>
        </v-container>

        <!-- Contact Me Modal -->
        <v-dialog v-model="showDialog" max-width="800px">
            <v-card>
                <v-card-title class="headline">Contact Me</v-card-title>

                <v-card-text>
                    <v-form @submit.prevent="submitForm">
                        <v-row>
                            <v-col cols="12" sm="4">
                                <v-text-field v-model.trim="contact.name" label="Name" required
                                    :error-messages="v$.contact.name.$errors.map(e => e.$message)"
                                    @blur="v$.contact.name.$touch()"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-text-field v-model.trim="contact.email" label="Email" type="email" required
                                    :error-messages="v$.contact.email.$errors.map(e => e.$message)"
                                    @blur="v$.contact.email.$touch()"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-text-field v-model.trim="contact.mobileNumber" label="Mobile Number" type="tel"
                                    required :error-messages="v$.contact.mobileNumber.$errors.map(e => e.$message)"
                                    @blur="v$.contact.mobileNumber.$touch()"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-text-field v-model.trim="contact.subject" label="Subject" required
                            :error-messages="v$.contact.subject.$errors.map(e => e.$message)"
                            @blur="v$.contact.subject.$touch()"></v-text-field>

                        <v-textarea v-model.trim="contact.body" label="Message" required
                            :error-messages="v$.contact.body.$errors.map(e => e.$message)"
                            @blur="v$.contact.body.$touch()"></v-textarea>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-btn text color="grey" @click="showDialog = false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" :disabled="v$.$invalid" @click="submitForm">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-footer>
</template>

<script>
import { reactive, computed, onMounted, onUnmounted } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

export default {
    name: "AppFooter",
    setup() {
        const contact = reactive({
            name: "",
            email: "",
            mobileNumber: "",
            subject: "",
            body: "",
        });

        const rules = {
            contact: {
                name: { required, minLength: minLength(3), maxLength: maxLength(50) },
                email: { required, email },
                mobileNumber: { required, minLength: minLength(10), maxLength: maxLength(15) },
                subject: { required, minLength: minLength(5), maxLength: maxLength(1000) },
                body: { required, minLength: minLength(10) },
            },
        };

        const v$ = useVuelidate(rules, { contact });

        const isDesktop = computed(() => window.innerWidth > 600);

        const updateWidth = () => {
            isDesktop.value = window.innerWidth > 600;
        };

        onMounted(() => {
            window.addEventListener("resize", updateWidth);
        });

        onUnmounted(() => {
            window.removeEventListener("resize", updateWidth);
        });

        return { contact, v$, isDesktop };
    },
    data() {
        return {
            showDialog: false,
        };
    },
    methods: {
        async submitForm() {
            this.v$.$touch();

            if (this.v$.$invalid) return;

            this.sendMail();
        },
        sendMail() {
            const { email, subject, body, mobileNumber, name } = this.contact;
            const to = "niteshkesarkar136@gmail.com";

            const formattedBody = `Name: ${name}%0D%0A`
                + `Mobile: ${mobileNumber}%0D%0A`
                + `Email: ${email}%0D%0A`
                + `Body: ${body}%0D%0A`;

            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${formattedBody}`;
            window.open(gmailLink, '_blank');

            setTimeout(() => {
                this.showDialog = false;
                this.resetForm();
            }, 5000);
        },
        resetForm() {
            this.contact.name = "";
            this.contact.email = "";
            this.contact.mobileNumber = "";
            this.contact.subject = "";
            this.contact.body = "";
            this.v$.$reset();
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
