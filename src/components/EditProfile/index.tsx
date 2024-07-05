import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Header';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import Input from '../Input';
import Button from '../Button';
import {color} from 'react-native-elements/dist/helpers';

const personalInformation = {
  name: 'Anish Sharma',
  contactNumber: '981010101010',
  email: 'anish@gmail.com',
  address: 'Gongabu, Kathmandu',
};
const EditProfile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>(personalInformation.name);
  const [contactNumber, setContactNumber] = useState<string>(
    personalInformation.contactNumber,
  );
  const [email, setEmail] = useState<string>(personalInformation.email);
  const [address, aetAddress] = useState<string>(personalInformation.address);
  return (
    <SafeAreaView>
      <Header
        title={'Edit Profile'}
        showBack={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.MainContainer}>
        <Text style={styles.HeaderText}>Edit your Profile</Text>
        <View style={styles.FieldContainer}>
          <Input
            label="First Name"
            placeholder={name}
            onChangeText={text => setName(text)}
          />
          <Input label="Contact Number" placeholder={contactNumber} />
          <Input label="Email" placeholder={email} />
          <Input label="Address" placeholder={address} />
          <TouchableOpacity style={styles.passwordContainer}>
            <Text style={styles.passwordText}>Edit Password</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Update Profile"
          onPress={() => {
            console.log('first');
          }}
          style={{color: 'white'}}
        />
      </View>

      <Modal visible={false}>
        <Text>Hello People</Text>
      </Modal>
    </SafeAreaView>
  );
};

export default EditProfile;
