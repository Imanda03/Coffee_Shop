import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {Avatar} from 'react-native-elements';
import {styles} from './style';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../../utils/color';
import {categories} from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import {products} from '../../../data/products';
import ProductHomeItem from '../../../components/ProductHomeItem';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface CategoryItem {
  id: any;
  title: string;
  image: any;
}

interface RenderCategoryItemProps {
  item: CategoryItem;
  index: number;
}

interface ProductItem {
  id: any;
  title: string;
  image: string;
  category: any;
  price: string;
  description?: string;
}

interface RenderProductItemProps {
  item: ProductItem;
  index: number;
}

const HomeScreen = ({navigation}: any) => {
  const [keyword, setKeyword] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState<any>();
  const [filteredProduct, setFilteredProduct] = useState(products);

  const renderCategoryItem = ({item, index}: RenderCategoryItemProps) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item.id)}
        isSelected={item.id === selectedCategory}
        isFirst={index === 0}
        title={item.title}
        image={item.image}
      />
    );
  };

  const renderProductItem = ({item}: RenderProductItemProps) => {
    return <ProductHomeItem {...item} />;
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.headerText}>
              <Text style={styles.greetText}>Hello Anish!</Text>
              <Text style={styles.txt}>Find your best beans</Text>
            </View>
            <Avatar
              rounded
              source={require('../../../assets/Images/avatar.jpg')}
              size={60}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="gray"
            onChangeText={text => setKeyword(text)}
            value={keyword}
          />
          <Feather
            name="search"
            size={24}
            color={colors.BROWN}
            style={styles.icon}
          />
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filteredProduct}
          renderItem={renderProductItem}
          keyExtractor={item => String(item.id)}
          ListFooterComponent={<View style={{height: 200}} />}
          style={styles.products}
        />
        <View style={styles.speacialText}>
          <Text style={styles.special}>Special offer</Text>
          <FontAwesome6 name="ranking-star" color={colors.RED} size={24} />
        </View>
        <View style={styles.saleContainer}>
          <View style={{flexDirection: 'row'}}>
            <Avatar
              source={require('../../../assets/Images/coffee.jpg')}
              size={100}
              avatarStyle={styles.image}
            />
            <View style={styles.saleContainer}>
              <View style={styles.discount}>
                <Text style={styles.DiscountText}>Discount Sales </Text>
                <MaterialCommunityIcons
                  name="check-decagram"
                  color={colors.COPPER}
                />
              </View>
              <Text style={styles.saleText}>Get three coffee beans for</Text>
              <Text style={styles.saleText}>the subscribe Imanda</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
