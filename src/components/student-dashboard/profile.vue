<template>
    <div class="container">
        <form  @submit.prevent="postProfile">
        <div class="row">
            <div class="col-md-6">
                 <div class="form-group">
                    <label for="Email">Email</label>
                    <input v-model="profile.email" type="text" class="form-control" placeholder="" aria-describedby="helpId">
                    <small id="helpId" class="text-muted">Help text</small>
                </div>
                 <div class="form-group">
                    <label for="First Name">First Name</label>
                    <input v-model="profile.firstName" type="text" class="form-control" placeholder="" aria-describedby="helpId">
                    <small id="helpId" class="text-muted">Help text</small>
                </div>
                 <div class="form-group">
                    <label for="Middle Name">Middle Name</label>
                    <input v-model="profile.middleName" type="text" class="form-control" placeholder="" aria-describedby="helpId">
                    <small id="helpId" class="text-muted">Help text</small>
                </div>
                 <div class="form-group">
                    <label for="Lastname">Last Name</label>
                    <input v-model="profile.lastName" type="text" class="form-control" placeholder="" aria-describedby="helpId">
                    <small id="helpId" class="text-muted">Help text</small>
                </div>
                <div class="form-group">
                        <label for="Gender">Gender</label>
                        <select v-model="profile.gender" class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                    </div>
                <div class="form-group">
                    <label for="LGA">LGA</label>
                    <input v-model="profile.lga" type="text" class="form-control" placeholder="" aria-describedby="helpId">
                    <small id="helpId" class="text-muted">Help text</small>
                </div>
                <div class="form-group">
                        <label for="Disability">Disability</label>
                        <select v-model="profile.disability" class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="yes">Yes</option>
                    <option value="non">Non</option>
                    </select>
                    </div>
            </div>
            <div class="col-md-6">
                 <div class="form-group">
                <label for="Username">Username</label>
                <input v-model="profile.userName" type="text" class="form-control" placeholder="" aria-describedby="helpId">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
                 <div class="form-group">
                <label for="Phone Number">Phone Number</label>
                <input v-model="profile.phoneNumber" type="text" class="form-control" placeholder="" aria-describedby="helpId">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
                    <div class="form-group">
                        <label for="Nationality">Nationality</label>
                        <select v-model="profile.nationality" class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="United States">United States</option>
                    </select>
                    </div>
                 <div class="form-group">
                <label for="State">State</label>
                <input v-model="profile.state" type="text" class="form-control" placeholder="" aria-describedby="helpId">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
                 <div class="form-group">
                <label for="D.O.B">D.O.B</label>
                <input v-model="profile.dob" type="date" class="form-control" placeholder="" aria-describedby="helpId">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
                <div class="form-group">
                <label for="First Course">First Course</label>
                <input v-model="profile.firstCourse" type="text" class="form-control" placeholder="" aria-describedby="helpId">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
                <div class="form-group">
                <label for="Second Course">Second Course</label>
                <input v-model="profile.secondCourse" type="text" class="form-control" placeholder="" aria-describedby="helpId">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
              
            </div>
            
        </div>
        <button type="submit" class="btn btn-primary" v-if="!isLoading">Submit</button>
        <div class="spinner-border" role="status" v-if="isLoading">
            <span class="visually-hidden">Loading...</span>

        </div>
         </form>
    </div>
</template>
<script>
import UserService from '../../services/user'

export default {
    name: 'ProfileComponent',
    data(){
        return {
            isLoading: false,
            errorMsg: '',
            errorIsAvailable: '',
            profile: {
                jambRegistrationNo: '',
                jambId: '',
                firstName: '',
                middleName: '',
                lastName: '',
                email: '',
                userName: '',
                phoneNumber: '',
                nationality: '',
                state: '',
                dob: '',
                gender: '',
                lga: '',
                disability: '',
                firstCourse: '',
                secondCourse: ''
            }
        }
    },
    created(){
        this.getProfile();
    },
    methods: {
        getProfile(){
            this.isLoading = true;
            UserService.fetchProfile().then(res => {
                this.isLoading = false;
                this.profile = res.data.result;
                console.log(res);
            }).catch(err => {
                this.isLoading = false;
                console.log(err);
            })
        },
         postProfile(){
            this.isLoading = true;
            UserService.updateProfile(this.profile).then(res => {
                this.isLoading = false;
                this.profile = res.data.result;
                console.log(res);
            }).catch(err => {
                this.isLoading = false;
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
    button {
        margin-left: 40%;
        margin-top: 40px;
    }
</style>