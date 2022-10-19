const baseUrl = 'http://146.185.154.90:8000/blog/johny.doe@mail.com';

const userNameH3 = document.getElementById('userName')!;
const editProfileBtn = document.getElementById('editProfile')!;
const profileModal = new bootstrap.Modal('#profileModal');
const firstNameInput = <HTMLInputElement>document.getElementById('firstName')!;
const lastNameInput = <HTMLInputElement> document.getElementById('lastName')!;
const profileForm = <HTMLFormElement>document.getElementById('profileForm');


interface GetProfileResponse {
  email:string,
  firstName:string,
  lastName:string,
  _id:string;
}

const run = async () => {
  const response = await fetch(baseUrl + '/profile');
  const user = await response.json();

  userNameH3.innerText = user.firstName + ' ' + user.lastName;

  editProfileBtn.addEventListener('click',  () => {
    profileModal.show();
    firstNameInput.value = user.firstName;
    lastNameInput.value = user.lastName;

    profileForm.addEventListener('submit', e => {
      e.preventDefault();
      console.log('something');
    });
  });
};


run().catch(console.error);