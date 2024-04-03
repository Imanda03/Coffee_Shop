import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
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

interface CategoryItem {
  id: any;
  title: string;
  image: string;
}

interface RenderCategoryItemProps {
  item: CategoryItem;
  index: number;
}

interface ProductItem {
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
  const [keyword, setkeyword] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredProduct, setFilterProduct] = useState(products);

  const renderCategoryItem = ({item, index}: RenderCategoryItemProps) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };

  const renderItem = ({item}: any) => (
    <View style={{padding: 16}}>
      <Image style={{width: 100, height: 100}} source={{uri: item.imageUri}} />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 8,
          color: 'black',
        }}>
        {item.title}
      </Text>
      <Text style={{fontSize: 16, marginTop: 4, color: 'black'}}>
        {item.description}
      </Text>
    </View>
  );

  const renderProductItem = ({item, index}: RenderProductItemProps) => {
    // const onProductPress = (product: any) => {
    //   navigation.navigate('ProductDetails', {product});
    // };
    // return <ProductHomeItem onPress={() => onProductPress(item)} {...item} />;
    return <ProductHomeItem {...item} />;
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerText}>
            <Text style={styles.greetText}>Hello Anish!</Text>
            <Text style={styles.txt}>Find your best beans</Text>
          </View>
          <Avatar
            rounded
            source={{
              uri: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png',
            }}
            size={60}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="gray"
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
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
