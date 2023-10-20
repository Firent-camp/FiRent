import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Svg, Rect, Path } from 'react-native-svg';

export default function Favorites() {
    StatusBar.setBackgroundColor('rgba(31, 31, 41, 1)');

    useEffect(() => {
        StatusBar.setBarStyle('light-content');
    }, []);
    return (
        <View style={styles.favorites}>
            <Text style={styles.events}>
                {`Events`}
            </Text>
            <Text style={styles.packages}>
                {`Packages`}
            </Text>
            <View style={styles.group62}>
                <View style={styles.group38}>
                    <Svg style={styles.group25} width="342" height="102" viewBox="0 0 342 102" fill="none" >
                        <Rect x="0.5" y="0.5" width="341" height="101" rx="19.5" fill="#131316" stroke="#131316" />
                    </Svg>

                    <Image
                        style={styles.rectangle7}
                        source={{ uri: "https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Tunisia-SidiBouSaid-760300645-1440x823.jpg" }}
                    />
                    <Text style={styles.redFishLake}>
                        {`RedFish Lake`}
                    </Text>
                    <TouchableOpacity style={styles.search}>
                        <View style={styles.group20}>
                            <View style={styles.rectangle3} />
                            <Text style={styles.bookNow}>
                                {`Book Now `}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.$40Visit}>
                        {`$40`}<Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(104, 109, 205, 1)" }}>{` `}</Text><Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`/`}</Text><Text style={{ "fontSize": 10, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`Visit`}</Text>
                    </Text>
                    <View style={styles.group68}>
                        <Text style={styles.idaho}>
                            {`Idaho`}
                        </Text>
                        <Svg style={styles.vector} width="10" height="13" viewBox="0 0 10 13" fill="none" >
                            <Path d="M4.6732 6.3804C4.99448 6.3804 5.26962 6.25534 5.49861 6.00523C5.7272 5.75554 5.8415 5.45524 5.8415 5.10432C5.8415 4.7534 5.7272 4.45288 5.49861 4.20277C5.26962 3.95308 4.99448 3.82824 4.6732 3.82824C4.35192 3.82824 4.07698 3.95308 3.84838 4.20277C3.61939 4.45288 3.5049 4.7534 3.5049 5.10432C3.5049 5.45524 3.61939 5.75554 3.84838 6.00523C4.07698 6.25534 4.35192 6.3804 4.6732 6.3804ZM4.6732 12.5215C4.59531 12.5215 4.51743 12.5056 4.43954 12.4737C4.36165 12.4418 4.2935 12.3992 4.23509 12.3461C2.81366 10.9743 1.75245 9.70097 1.05147 8.52612C0.35049 7.35086 0 6.25279 0 5.23193C0 3.63683 0.469852 2.36606 1.40955 1.41964C2.34887 0.473213 3.43675 0 4.6732 0C5.90965 0 6.99753 0.473213 7.93685 1.41964C8.87655 2.36606 9.3464 3.63683 9.3464 5.23193C9.3464 6.25279 8.99591 7.35086 8.29493 8.52612C7.59395 9.70097 6.53275 10.9743 5.11131 12.3461C5.0529 12.3992 4.98475 12.4418 4.90686 12.4737C4.82897 12.5056 4.75109 12.5215 4.6732 12.5215Z" fill="#575B66" />
                        </Svg>

                    </View>
                </View>
                <View style={styles.group35}>
                    <View style={styles.rectangle35} />
                    <Text style={styles._9}>
                        {`4.9`}
                    </Text>
                    <Svg style={styles.star3} width="12" height="11" viewBox="0 0 12 11" fill="none" >
                        <Path d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" fill="#EBB513" />
                    </Svg>

                </View>
            </View>
            <View style={styles.group3474}>
                <View style={styles._group38}>
                    <Svg style={styles._group25} width="342" height="102" viewBox="0 0 342 102" fill="none" >
                        <Rect x="0.5" y="0.5" width="341" height="101" rx="19.5" fill="#131316" stroke="#131316" />
                    </Svg>

                    <Image
                        style={styles._rectangle7}
                        source={{ uri: "https://www.passportandpixels.com/wp-content/uploads/2019/12/Tunisia-139_pp.jpg" }}
                    />
                    <Text style={styles._redFishLake}>
                        {`RedFish Lake`}
                    </Text>
                    <TouchableOpacity style={styles._search}>
                        <View style={styles._group20}>
                            <View style={styles._rectangle3} />
                            <Text style={styles._bookNow}>
                                {`Book Now `}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles._$40Visit}>
                        {`$40`}<Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(104, 109, 205, 1)" }}>{` `}</Text><Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`/`}</Text><Text style={{ "fontSize": 10, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`Visit`}</Text>
                    </Text>
                    <View style={styles._group68}>
                        <Text style={styles._idaho}>
                            {`Idaho`}
                        </Text>
                        <Svg style={styles._vector} width="10" height="13" viewBox="0 0 10 13" fill="none" >
                            <Path d="M4.6732 6.3804C4.99448 6.3804 5.26962 6.25534 5.49861 6.00523C5.7272 5.75554 5.8415 5.45524 5.8415 5.10432C5.8415 4.7534 5.7272 4.45288 5.49861 4.20277C5.26962 3.95308 4.99448 3.82824 4.6732 3.82824C4.35192 3.82824 4.07698 3.95308 3.84838 4.20277C3.61939 4.45288 3.5049 4.7534 3.5049 5.10432C3.5049 5.45524 3.61939 5.75554 3.84838 6.00523C4.07698 6.25534 4.35192 6.3804 4.6732 6.3804ZM4.6732 12.5215C4.59531 12.5215 4.51743 12.5056 4.43954 12.4737C4.36165 12.4418 4.2935 12.3992 4.23509 12.3461C2.81366 10.9743 1.75245 9.70097 1.05147 8.52613C0.35049 7.35086 0 6.25279 0 5.23193C0 3.63683 0.469852 2.36606 1.40955 1.41964C2.34887 0.473213 3.43675 0 4.6732 0C5.90965 0 6.99753 0.473213 7.93685 1.41964C8.87655 2.36606 9.3464 3.63683 9.3464 5.23193C9.3464 6.25279 8.99591 7.35086 8.29493 8.52613C7.59395 9.70097 6.53275 10.9743 5.11131 12.3461C5.0529 12.3992 4.98475 12.4418 4.90686 12.4737C4.82897 12.5056 4.75109 12.5215 4.6732 12.5215Z" fill="#575B66" />
                        </Svg>

                    </View>
                </View>
                <View style={styles._group35}>
                    <View style={styles._rectangle35} />
                    <Text style={styles.__9}>
                        {`4.9`}
                    </Text>
                    <Svg style={styles._star3} width="12" height="11" viewBox="0 0 12 11" fill="none" >
                        <Path d="M5.52447 0.463525C5.67415 0.0028693 6.32585 0.00287002 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" fill="#EBB513" />
                    </Svg>

                </View>
            </View>
            <View style={styles.group3493}>
                <View style={styles.group64}>
                    <View style={styles.__group38}>
                        <Svg style={styles.__group25} width="342" height="102" viewBox="0 0 342 102" fill="none" >
                            <Rect x="0.5" y="0.5" width="341" height="101" rx="19.5" fill="#131316" stroke="#131316" />
                        </Svg>

                        <Image
                            style={styles.__rectangle7}
                            source={{ uri: "https://lp-cms-production.imgix.net/image_browser/El-Jem-roman-ruins-tunisia.jpg" }}
                        />
                        <Text style={styles.kingDuke}>
                            {`King + Duke`}
                        </Text>
                        <Text style={styles.$1203dayvisit}>
                            {`$120 `}<Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`/ `}</Text><Text style={{ "fontSize": 10, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`3 day visit`}</Text>
                        </Text>
                        <Text style={styles.toronto}>
                            {`Toronto`}
                        </Text>
                        <Svg style={styles.__vector} width="10" height="13" viewBox="0 0 10 13" fill="none" >
                            <Path d="M4.6732 6.3804C4.99448 6.3804 5.26962 6.25534 5.49861 6.00523C5.7272 5.75554 5.8415 5.45524 5.8415 5.10432C5.8415 4.7534 5.7272 4.45288 5.49861 4.20277C5.26962 3.95308 4.99448 3.82824 4.6732 3.82824C4.35192 3.82824 4.07698 3.95308 3.84838 4.20277C3.61939 4.45288 3.5049 4.7534 3.5049 5.10432C3.5049 5.45524 3.61939 5.75554 3.84838 6.00523C4.07698 6.25534 4.35192 6.3804 4.6732 6.3804ZM4.6732 12.5215C4.59531 12.5215 4.51743 12.5056 4.43954 12.4737C4.36165 12.4418 4.2935 12.3992 4.23509 12.3461C2.81366 10.9743 1.75245 9.70097 1.05147 8.52613C0.35049 7.35086 0 6.25279 0 5.23193C0 3.63683 0.469852 2.36606 1.40955 1.41964C2.34887 0.473213 3.43675 0 4.6732 0C5.90965 0 6.99753 0.473213 7.93685 1.41964C8.87655 2.36606 9.3464 3.63683 9.3464 5.23193C9.3464 6.25279 8.99591 7.35086 8.29493 8.52613C7.59395 9.70097 6.53275 10.9743 5.11131 12.3461C5.0529 12.3992 4.98475 12.4418 4.90686 12.4737C4.82897 12.5056 4.75109 12.5215 4.6732 12.5215Z" fill="#575B66" />
                        </Svg>

                        <TouchableOpacity style={styles.__search}>
                            <View style={styles.__group20}>
                                <View style={styles.__rectangle3} />
                                <Text style={styles.__bookNow}>
                                    {`Book Now `}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.__group35}>
                    <View style={styles.__rectangle35} />
                    <Text style={styles.___9}>
                        {`4.9`}
                    </Text>
                    <Svg style={styles.__star3} width="12" height="11" viewBox="0 0 12 11" fill="none" >
                        <Path d="M5.52447 0.463525C5.67415 0.0028693 6.32585 0.00287002 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" fill="#EBB513" />
                    </Svg>

                </View>
            </View>
            <View style={styles.group3603}>
                <View style={styles._group64}>
                    <View style={styles.___group38}>
                        <Svg style={styles.___group25} width="342" height="102" viewBox="0 0 342 102" fill="none" >
                            <Rect x="0.5" y="0.5" width="341" height="101" rx="19.5" fill="#131316" stroke="#131316" />
                        </Svg>
                        <Image
                            style={styles.___rectangle7}
                            source={{ uri: "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_769887085v2.jpg" }}
                        />
                        <Text style={styles._kingDuke}>
                            {`King + Duke`}
                        </Text>
                        <Text style={styles._$1203dayvisit}>
                            {`$120 `}<Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`/ `}</Text><Text style={{ "fontSize": 10, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`3 day visit`}</Text>
                        </Text>
                        <Text style={styles._toronto}>
                            {`Toronto`}
                        </Text>
                        <Svg style={styles.___vector} width="10" height="13" viewBox="0 0 10 13" fill="none" >
                            <Path d="M4.6732 6.3804C4.99448 6.3804 5.26962 6.25534 5.49861 6.00523C5.7272 5.75554 5.8415 5.45524 5.8415 5.10432C5.8415 4.7534 5.7272 4.45288 5.49861 4.20277C5.26962 3.95308 4.99448 3.82824 4.6732 3.82824C4.35192 3.82824 4.07698 3.95308 3.84838 4.20277C3.61939 4.45288 3.5049 4.7534 3.5049 5.10432C3.5049 5.45524 3.61939 5.75554 3.84838 6.00523C4.07698 6.25534 4.35192 6.3804 4.6732 6.3804ZM4.6732 12.5215C4.59531 12.5215 4.51743 12.5056 4.43954 12.4737C4.36165 12.4418 4.2935 12.3992 4.23509 12.3461C2.81366 10.9743 1.75245 9.70097 1.05147 8.52613C0.35049 7.35086 0 6.25279 0 5.23193C0 3.63683 0.469852 2.36606 1.40955 1.41964C2.34887 0.473213 3.43675 0 4.6732 0C5.90965 0 6.99753 0.473213 7.93685 1.41964C8.87655 2.36606 9.3464 3.63683 9.3464 5.23193C9.3464 6.25279 8.99591 7.35086 8.29493 8.52613C7.59395 9.70097 6.53275 10.9743 5.11131 12.3461C5.0529 12.3992 4.98475 12.4418 4.90686 12.4737C4.82897 12.5056 4.75109 12.5215 4.6732 12.5215Z" fill="#575B66" />
                        </Svg>

                        <TouchableOpacity style={styles.___search}>
                            <View style={styles.___group20}>
                                <View style={styles.___rectangle3} />
                                <Text style={styles.___bookNow}>
                                    {`Book Now `}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.___group35}>
                    <View style={styles.___rectangle35} />
                    <Text style={styles.____9}>
                        {`4.9`}
                    </Text>
                    <Svg style={styles.___star3} width="12" height="11" viewBox="0 0 12 11" fill="none" >
                        <Path d="M5.52447 0.463525C5.67415 0.0028693 6.32585 0.00287002 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" fill="#EBB513" />
                    </Svg>

                </View>
            </View>
            <View style={styles.group3602}>
                <View style={styles.__group64}>
                    <View style={styles.____group38}>
                        <Svg style={styles.____group25} width="342" height="102" viewBox="0 0 342 102" fill="none" >
                            <Rect x="0.5" y="0.5" width="341" height="101" rx="19.5" fill="#131316" stroke="#131316" />
                        </Svg>

                        <Image
                            style={styles.____rectangle7}
                            source={{ uri: "https://www.tunisiatourism.info/thumbs/780-420-pages-1634903451-23649783.jpg" }}
                        />
                        <Text style={styles.__kingDuke}>
                            {`King + Duke`}
                        </Text>
                        <Text style={styles.__$1203dayvisit}>
                            {`$120 `}<Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`/ `}</Text><Text style={{ "fontSize": 10, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`3 day visit`}</Text>
                        </Text>
                        <Text style={styles.__toronto}>
                            {`Toronto`}
                        </Text>
                        <Svg style={styles.____vector} width="10" height="13" viewBox="0 0 10 13" fill="none" >
                            <Path d="M4.6732 6.3804C4.99448 6.3804 5.26962 6.25534 5.49861 6.00523C5.7272 5.75554 5.8415 5.45524 5.8415 5.10432C5.8415 4.7534 5.7272 4.45288 5.49861 4.20277C5.26962 3.95308 4.99448 3.82824 4.6732 3.82824C4.35192 3.82824 4.07698 3.95308 3.84838 4.20277C3.61939 4.45288 3.5049 4.7534 3.5049 5.10432C3.5049 5.45524 3.61939 5.75554 3.84838 6.00523C4.07698 6.25534 4.35192 6.3804 4.6732 6.3804ZM4.6732 12.5215C4.59531 12.5215 4.51743 12.5056 4.43954 12.4737C4.36165 12.4418 4.2935 12.3992 4.23509 12.3461C2.81366 10.9743 1.75245 9.70097 1.05147 8.52613C0.35049 7.35086 0 6.25279 0 5.23193C0 3.63683 0.469852 2.36606 1.40955 1.41964C2.34887 0.473213 3.43675 0 4.6732 0C5.90965 0 6.99753 0.473213 7.93685 1.41964C8.87655 2.36606 9.3464 3.63683 9.3464 5.23193C9.3464 6.25279 8.99591 7.35086 8.29493 8.52613C7.59395 9.70097 6.53275 10.9743 5.11131 12.3461C5.0529 12.3992 4.98475 12.4418 4.90686 12.4737C4.82897 12.5056 4.75109 12.5215 4.6732 12.5215Z" fill="#575B66" />
                        </Svg>

                        <TouchableOpacity style={styles.____search}>
                            <View style={styles.____group20}>
                                <View style={styles.____rectangle3} />
                                <Text style={styles.____bookNow}>
                                    {`Book Now `}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.____group35}>
                    <View style={styles.____rectangle35} />
                    <Text style={styles._____9}>
                        {`4.9`}
                    </Text>
                    <Svg style={styles.____star3} width="12" height="11" viewBox="0 0 12 11" fill="none" >
                        <Path d="M5.52447 0.463525C5.67415 0.0028693 6.32585 0.00287002 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" fill="#EBB513" />
                    </Svg>

                </View>
            </View>
            <Text style={styles.savedtrips}>
                {`Saved trips`}
            </Text>
            <TouchableOpacity>

            <Svg style={styles.group3453} width="39" height="38" viewBox="0 0 39 38" fill="none" >
                <Rect width="38.1013" height="38" rx="6" fill="#131316" />
                <Path fillRule="evenodd" clipRule="evenodd" d="M24.1462 10.5042C24.4795 10.8271 24.6667 11.2651 24.6667 11.7217C24.6667 12.1784 24.4795 12.6163 24.1462 12.9392L18.2915 18.6101L24.1462 24.2809C24.47 24.6057 24.6492 25.0407 24.6452 25.4923C24.6411 25.9438 24.4542 26.3757 24.1245 26.695C23.7949 27.0143 23.349 27.1954 22.8828 27.1993C22.4166 27.2033 21.9675 27.0297 21.6322 26.716L14.5205 19.8276C14.1872 19.5047 14 19.0667 14 18.6101C14 18.1535 14.1872 17.7155 14.5205 17.3926L21.6322 10.5042C21.9656 10.1814 22.4178 10 22.8892 10C23.3606 10 23.8128 10.1814 24.1462 10.5042Z" fill="#686DCD" />
            </Svg>
            </TouchableOpacity>

            <View style={styles.rectangle13} />
            <TouchableOpacity>


            <Svg style={styles._______vector} width="24" height="23" viewBox="0 0 24 23" fill="none" >
                <Path d="M13.499 0.844414C12.7542 0.221295 11.5891 0.221295 10.8443 0.844414L1.48641 8.67352C0.907408 9.15793 0.579346 9.83191 0.579346 10.537V20.0585C0.579346 21.4748 1.87685 22.623 3.47742 22.623H6.3755C7.97607 22.623 9.27358 21.4748 9.27358 20.0585V15.7843C9.27358 15.3123 9.70609 14.9296 10.2396 14.9296H14.1037C14.6372 14.9296 15.0697 15.3123 15.0697 15.7843V20.0585C15.0697 21.4748 16.3673 22.623 17.9678 22.623H20.8659C22.4664 22.623 23.764 21.4748 23.764 20.0585V10.537C23.764 9.83191 23.4359 9.15793 22.8569 8.67352L13.499 0.844414Z" fill="#AFAFAF" />
            </Svg>
            </TouchableOpacity>


            <TouchableOpacity>
                <Svg style={styles._____vector} width="20" height="23" viewBox="0 0 20 23" fill="none" >
                    <Path d="M9.9339 11.6797C10.5855 11.6797 11.1434 11.4576 11.6078 11.0132C12.0714 10.5696 12.3032 10.0361 12.3032 9.41263C12.3032 8.78918 12.0714 8.25528 11.6078 7.81093C11.1434 7.36733 10.5855 7.14553 9.9339 7.14553C9.28233 7.14553 8.72474 7.36733 8.26114 7.81093C7.79675 8.25528 7.56456 8.78918 7.56456 9.41263C7.56456 10.0361 7.79675 10.5696 8.26114 11.0132C8.72474 11.4576 9.28233 11.6797 9.9339 11.6797ZM9.9339 22.5901C9.77594 22.5901 9.61799 22.5618 9.46003 22.5051C9.30207 22.4484 9.16386 22.3729 9.04539 22.2784C6.1627 19.8413 4.01055 17.5791 2.58895 15.4919C1.16734 13.4039 0.456543 11.453 0.456543 9.63934C0.456543 6.80547 1.40941 4.54782 3.31515 2.86638C5.2201 1.18495 7.42635 0.344238 9.9339 0.344238C12.4414 0.344238 14.6477 1.18495 16.5526 2.86638C18.4584 4.54782 19.4113 6.80547 19.4113 9.63934C19.4113 11.453 18.7005 13.4039 17.2788 15.4919C15.8572 17.5791 13.7051 19.8413 10.8224 22.2784C10.7039 22.3729 10.5657 22.4484 10.4078 22.5051C10.2498 22.5618 10.0919 22.5901 9.9339 22.5901Z" fill="#AFAFAF" />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity>
            <Svg style={styles.union} width="29" height="28" viewBox="0 0 29 28" fill="none" >
                <Path fillRule="evenodd" clipRule="evenodd" d="M10.8028 2.66668C15.2589 2.66668 18.8713 6.20314 18.8713 10.5656C18.8713 14.928 15.2589 18.4645 10.8028 18.4645C9.83426 18.4645 8.90807 18.2979 8.05078 17.9935C7.67289 17.8592 7.25269 17.8292 6.84282 17.9278C5.74194 18.1925 4.61809 18.3604 3.48469 18.429C3.91089 17.3297 4.05814 16.1413 3.90831 14.9673C3.87499 14.7062 3.78774 14.4771 3.6841 14.2876C3.07826 13.1798 2.73424 11.9137 2.73424 10.5656C2.73424 6.20314 6.34664 2.66668 10.8028 2.66668ZM21.1766 10.5656C21.1766 4.95673 16.532 0.409851 10.8028 0.409851C5.07346 0.409851 0.428955 4.95673 0.428955 10.5656C0.428955 12.2771 0.862325 13.8927 1.62841 15.3099C1.74799 16.3547 1.52641 17.413 0.990675 18.3308L0.943398 18.4118C0.342737 19.4409 1.10173 20.7213 2.31242 20.7213C4.00433 20.7213 5.68654 20.524 7.32399 20.1359C8.41292 20.5153 9.58448 20.7213 10.8028 20.7213C16.532 20.7213 21.1766 16.1744 21.1766 10.5656ZM23.8913 9.72844C23.4047 10.1303 23.343 10.8422 23.7534 11.3185C25.023 12.7919 25.7871 14.6931 25.7871 16.7719C25.7871 18.2192 25.417 19.5785 24.7653 20.7673C24.6608 20.9579 24.5741 21.1867 24.5405 21.4463C24.3757 22.7222 24.5444 24.0146 25.0254 25.2037C23.7733 25.1347 22.5316 24.9521 21.3162 24.6588C20.906 24.5598 20.4847 24.5896 20.1055 24.7251C19.1828 25.0546 18.1853 25.235 17.1423 25.235C15.0189 25.235 13.0769 24.4869 11.5719 23.2441C11.0853 22.8422 10.3581 22.9026 9.94763 23.379C9.53717 23.8553 9.59888 24.5673 10.0855 24.9691C11.9908 26.5425 14.4548 27.4918 17.1423 27.4918C18.4359 27.4918 19.6795 27.2717 20.8345 26.8668C22.5754 27.2811 24.3641 27.4918 26.1633 27.4918C27.3943 27.4918 28.166 26.1899 27.5553 25.1435L27.5553 25.1435L27.5051 25.0575C26.926 24.0653 26.6878 22.9207 26.82 21.7916C27.6325 20.2929 28.0924 18.5833 28.0924 16.7719C28.0924 14.1408 27.1228 11.7286 25.5155 9.86337C25.1051 9.38702 24.3779 9.3266 23.8913 9.72844ZM6.19218 11.694C6.82876 11.694 7.34482 11.1888 7.34482 10.5656C7.34482 9.94238 6.82876 9.43717 6.19218 9.43717C5.55559 9.43717 5.03953 9.94238 5.03953 10.5656C5.03953 11.1888 5.55559 11.694 6.19218 11.694ZM11.9554 10.5656C11.9554 11.1888 11.4393 11.694 10.8028 11.694C10.1662 11.694 9.65011 11.1888 9.65011 10.5656C9.65011 9.94238 10.1662 9.43717 10.8028 9.43717C11.4393 9.43717 11.9554 9.94238 11.9554 10.5656ZM15.4133 11.694C16.0499 11.694 16.566 11.1888 16.566 10.5656C16.566 9.94238 16.0499 9.43717 15.4133 9.43717C14.7767 9.43717 14.2607 9.94238 14.2607 10.5656C14.2607 11.1888 14.7767 11.694 15.4133 11.694Z" fill="#AFAFAF" />
            </Svg>
            </TouchableOpacity>
            <TouchableOpacity>

            <Svg style={styles.group3604} width="37" height="22" viewBox="0 0 37 22" fill="none" >
                <Path d="M25.9438 16.772C24.8568 16.4246 23.6811 16.4025 22.5941 16.0551C22.264 15.9517 21.6117 15.8261 21.4748 15.4787C21.346 15.1388 21.346 14.7397 21.3218 14.385C21.3057 14.1042 21.2977 13.8234 21.2977 13.5426C21.2977 13.3578 21.813 12.9662 21.9258 12.7962C22.3606 12.1311 22.4008 11.237 22.4814 10.4832C23.1819 10.6605 23.2705 9.47078 23.3913 9.10868C23.4798 8.85742 24.0193 7.12819 23.1819 7.36467C23.3832 7.03952 23.4637 6.64046 23.5201 6.27836C23.6811 5.33246 23.7456 4.29788 23.4315 3.37414C22.7793 1.45278 20.7743 0.37386 18.6566 0.314741C16.5066 0.248232 14.3486 1.19413 13.5434 3.10811C13.1569 4.03923 13.1891 5.05164 13.3179 6.0271C13.3743 6.4705 13.4548 6.96562 13.6964 7.36467C12.9153 7.15036 13.3341 8.67267 13.4226 8.93871C13.5515 9.31559 13.6642 10.6679 14.3969 10.4832C14.4614 11.0818 14.5338 11.6951 14.711 12.2789C14.8318 12.6706 15.0814 13.0031 15.3713 13.3061C15.5162 13.4539 15.5887 13.4687 15.5806 13.6608C15.5726 14.2372 15.5887 14.858 15.4276 15.4196C15.2666 15.9812 13.9219 16.2177 13.3824 16.3212C11.933 16.5946 10.5963 16.7202 9.38847 17.5479C7.97933 18.5012 7.24658 19.9866 7.24658 21.5902H29.6317C29.6317 19.4101 28.1984 17.4888 25.9438 16.772Z" fill="#AFAFAF" />
                <Path d="M9.36752 15.7783C9.09106 15.9018 8.75769 16.0544 9.43257 15.7492L9.49762 15.7202C10.0505 15.4877 10.6441 15.4296 11.2377 15.3787C11.4653 15.3569 11.571 15.2189 11.4003 15.0228C11.075 14.6523 9.95296 14.5796 9.48135 14.4125C9.18863 14.3108 9.10732 14.2164 9.08293 13.9258C9.0748 13.795 8.99349 13.2138 9.10732 13.1194C9.18864 13.0467 9.70089 13.0758 9.81473 13.0613C10.2782 13.0104 10.7498 12.9232 11.1889 12.7707C11.3759 12.7053 11.5548 12.6254 11.7174 12.5237C11.9125 12.3929 11.571 12.0732 11.4816 11.8989C11.2051 11.354 11.0832 10.7583 11.0425 10.1626C10.9612 8.99296 11.1645 7.81605 10.9206 6.65368C10.5547 4.8738 9.01788 3.98022 7.05829 3.98022C5.84676 3.98022 4.65149 4.35073 3.97661 5.29516C3.22855 6.33403 3.26921 7.62717 3.30986 8.81134C3.33426 9.48697 3.36678 10.1699 3.26108 10.8455C3.21229 11.1361 3.13911 11.4194 3.02528 11.6955C2.93583 11.9062 2.48049 12.4292 2.65938 12.5382C3.33426 12.9668 4.47261 13.1121 5.28572 13.054C5.31011 13.41 5.38329 13.8677 5.23693 14.2018C5.00926 14.7249 3.30986 14.8629 2.79761 15.0155C1.37467 15.4369 0.317627 16.4685 0.317627 17.9214H6.78184C6.88754 17.9214 7.29409 17.2458 7.40793 17.1368C7.96084 16.592 8.63572 16.1198 9.36752 15.7783Z" fill="#AFAFAF" />
                <Path d="M33.8361 15.1494C33.1918 14.9543 31.951 14.8943 31.4896 14.369C31.259 14.1064 31.3862 13.4385 31.4101 13.1233C31.7601 13.1534 32.1419 13.1008 32.4998 13.0558C32.8259 13.0108 33.1441 12.9507 33.4543 12.8457C33.5975 12.7932 33.7406 12.7406 33.8758 12.6656C34.1861 12.493 34.0429 12.463 33.8838 12.2078C33.0168 10.8346 33.4066 9.09364 33.3668 7.58531C33.335 6.33213 32.985 4.95888 31.776 4.2535C30.6863 3.61565 29.0716 3.59313 27.9023 4.04338C24.5298 5.31908 26.5183 9.53638 25.365 11.9527C25.1661 12.3579 24.8798 12.5005 25.3809 12.7406C25.6593 12.8757 25.9615 12.9658 26.2638 13.0333C26.7251 13.1383 27.2024 13.1984 27.6796 13.2134C27.7592 13.2134 27.7035 14.1589 27.6796 14.2565C27.5921 14.6242 26.741 14.7292 26.4229 14.8118C26.0967 14.8943 25.5559 14.9168 25.3968 15.2395C25.1582 15.7198 26.1842 15.5997 26.4388 15.6447C27.258 15.7873 27.9819 16.215 28.6182 16.7028C29.0954 17.0705 29.7397 17.5658 29.9147 18.1661H36.2939C36.278 16.6578 35.236 15.5847 33.8361 15.1494Z" fill="#AFAFAF" />
            </Svg>

            </TouchableOpacity>

            
            

            
            <TouchableOpacity>

                <Svg style={styles.______vector} width="24" height="22" viewBox="0 0 24 22" fill="none" >
                    <Path d="M12.392 0.311462C13.9237 0.311462 15.3928 0.869936 16.4759 1.86403C17.559 2.85811 18.1675 4.20639 18.1675 5.61224C18.1675 7.0181 17.559 8.36637 16.4759 9.36046C15.3928 10.3546 13.9237 10.913 12.392 10.913C10.8602 10.913 9.39115 10.3546 8.30802 9.36046C7.22489 8.36637 6.61639 7.0181 6.61639 5.61224C6.61639 4.20639 7.22489 2.85811 8.30802 1.86403C9.39115 0.869936 10.8602 0.311462 12.392 0.311462ZM12.392 13.5634C18.774 13.5634 23.9431 15.9355 23.9431 18.8642V21.5146H0.84082V18.8642C0.84082 15.9355 6.00996 13.5634 12.392 13.5634Z" fill="#AFAFAF" />
                </Svg>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    favorites: {
        flexShrink: 0,
        height: 872,
        width: 416,
        backgroundColor: "rgba(31, 31, 41, 1)",
        alignItems: "flex-start",
        rowGap: 0,
        borderWidth: 3,
        borderColor: "rgba(30, 30, 30, 1)"
    },
    events: {
        position: "absolute",
        flexShrink: 0,
        top: 110,
        left: 43,
        width: 76,
        height: 19,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 0
    },
    packages: {
        position: "absolute",
        flexShrink: 0,
        top: 393,
        left: 43,
        width: 90,
        height: 25,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 0
    },
    group62: {
        position: "absolute",
        flexShrink: 0,
        top: 149,
        height: 102,
        left: 38,
        width: 342
    },
    group38: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    group25: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    rectangle7: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        left: 5,
        width: 141,
        height: 90,
        borderRadius: 20
    },
    redFishLake: {
        position: "absolute",
        flexShrink: 0,
        top: 11,
        left: 161,
        width: 84,
        height: 18,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 13,
        fontWeight: "600",
        letterSpacing: 0
    },
    search: {
        position: "absolute",
        flexShrink: 0,
        top: 76,
        height: 19,
        left: 162,
        width: 84
    },
    group20: {
        position: "absolute",
        flexShrink: 0,
        top: 0.38299560546875,
        height: 19,
        width: 84
    },
    rectangle3: {
        position: "absolute",
        flexShrink: 0,
        top: 0.38299560546875,
        width: 84,
        height: 19,
        backgroundColor: "rgba(104, 109, 205, 1)",
        borderWidth: 1,
        borderColor: "rgba(104, 109, 205, 1)",
        borderRadius: 20
    },
    bookNow: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        left: 21,
        width: 60,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 9,
        fontWeight: "400",
        letterSpacing: 0
    },
    $40Visit: {
        position: "absolute",
        flexShrink: 0,
        top: 54,
        left: 162,
        width: 51,
        height: 17,
        textAlign: "left",
        color: "rgba(104, 109, 205, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    group68: {
        position: "absolute",
        flexShrink: 0,
        top: 34,
        height: 15,
        left: 162,
        width: 43
    },
    idaho: {
        position: "absolute",
        flexShrink: 0,
        top: -0.04254150390625,
        left: 12.999908447265625,
        width: 80,
        height: 20,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    vector: {
        position: "absolute",
        flexShrink: 0,
        top: 0.95745849609375,
        left: -0.000091552734375,
        width: 9,
        height: 13,
        overflow: "visible"
    },
    group35: {
        position: "absolute",
        flexShrink: 0,
        top: 7,
        height: 22,
        left: 285,
        width: 44
    },
    rectangle35: {
        position: "absolute",
        flexShrink: 0,
        width: 44,
        height: 22,
        backgroundColor: "rgba(31, 31, 41, 1)",
        borderRadius: 5
    },
    _9: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 5,
        width: 19,
        height: 14,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    star3: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 25,
        width: 14,
        height: 14,
        overflow: "visible"
    },
    group3474: {
        position: "absolute",
        flexShrink: 0,
        top: 271,
        height: 102,
        left: 38,
        width: 342
    },
    _group38: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    _group25: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    _rectangle7: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        left: 5,
        width: 141,
        height: 90,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 20
    },
    _redFishLake: {
        position: "absolute",
        flexShrink: 0,
        top: 11,
        left: 161,
        width: 84,
        height: 18,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 13,
        fontWeight: "600",
        letterSpacing: 0
    },
    _search: {
        position: "absolute",
        flexShrink: 0,
        top: 76,
        height: 19,
        left: 162,
        width: 84
    },
    _group20: {
        position: "absolute",
        flexShrink: 0,
        top: 0.38299560546875,
        height: 19,
        width: 84
    },
    _rectangle3: {
        position: "absolute",
        flexShrink: 0,
        top: 0.38299560546875,
        width: 84,
        height: 19,
        backgroundColor: "rgba(104, 109, 205, 1)",
        borderWidth: 1,
        borderColor: "rgba(104, 109, 205, 1)",
        borderRadius: 20
    },
    _bookNow: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        left: 21,
        width: 60,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 9,
        fontWeight: "400",
        letterSpacing: 0
    },
    _$40Visit: {
        position: "absolute",
        flexShrink: 0,
        top: 54,
        left: 162,
        width: 51,
        height: 17,
        textAlign: "left",
        color: "rgba(104, 109, 205, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    _group68: {
        position: "absolute",
        flexShrink: 0,
        top: 34,
        height: 15,
        left: 162,
        width: 43
    },
    _idaho: {
        position: "absolute",
        flexShrink: 0,
        left: 12.999908447265625,
        width: 80,
        height: 20,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    _vector: {
        position: "absolute",
        flexShrink: 0,
        left: -0.000091552734375,
        width: 9,
        height: 13,
        overflow: "visible"
    },
    _group35: {
        position: "absolute",
        flexShrink: 0,
        top: 7,
        height: 22,
        left: 285,
        width: 44
    },
    _rectangle35: {
        position: "absolute",
        flexShrink: 0,
        width: 44,
        height: 22,
        backgroundColor: "rgba(31, 31, 41, 1)",
        borderRadius: 5
    },
    __9: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 5,
        width: 19,
        height: 14,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    _star3: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 25,
        width: 14,
        height: 14,
        overflow: "visible"
    },
    group3493: {
        position: "absolute",
        flexShrink: 0,
        top: 432,
        height: 102,
        left: 38,
        width: 342
    },
    group64: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    __group38: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    __group25: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    __rectangle7: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        left: 5,
        width: 141,
        height: 90,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 15
    },
    rectangle8: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 5,
        width: 140,
        height: 91,
        borderRadius: 20
    },
    kingDuke: {
        position: "absolute",
        flexShrink: 0,
        top: 9,
        left: 162,
        width: 111,
        height: 18,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 13,
        fontWeight: "600",
        letterSpacing: 0
    },
    $1203dayvisit: {
        position: "absolute",
        flexShrink: 0,
        top: 52,
        left: 162,
        width: 95,
        height: 17,
        textAlign: "left",
        color: "rgba(104, 109, 205, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    toronto: {
        position: "absolute",
        flexShrink: 0,
        top: 32,
        left: 175,
        width: 80,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    __vector: {
        position: "absolute",
        flexShrink: 0,
        top: 32,
        left: 162,
        width: 9,
        height: 13,
        overflow: "visible"
    },
    __search: {
        position: "absolute",
        flexShrink: 0,
        top: 74,
        height: 19,
        left: 162,
        width: 84
    },
    __group20: {
        position: "absolute",
        flexShrink: 0,
        height: 19,
        width: 84
    },
    __rectangle3: {
        position: "absolute",
        flexShrink: 0,
        width: 84,
        height: 19,
        backgroundColor: "rgba(104, 109, 205, 1)",
        borderWidth: 1,
        borderColor: "rgba(104, 109, 205, 1)",
        borderRadius: 20
    },
    __bookNow: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        left: 21,
        width: 60,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 9,
        fontWeight: "400",
        letterSpacing: 0
    },
    __group35: {
        position: "absolute",
        flexShrink: 0,
        top: 9,
        height: 22,
        left: 284,
        width: 44
    },
    __rectangle35: {
        position: "absolute",
        flexShrink: 0,
        width: 44,
        height: 22,
        backgroundColor: "rgba(31, 31, 41, 1)",
        borderRadius: 5
    },
    ___9: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 5,
        width: 19,
        height: 14,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    __star3: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 25,
        width: 14,
        height: 14,
        overflow: "visible"
    },
    group3603: {
        position: "absolute",
        flexShrink: 0,
        top: 676,
        height: 102,
        left: 39,
        width: 342
    },
    _group64: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    ___group38: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    ___group25: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    ___rectangle7: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        left: 5,
        width: 141,
        height: 90,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 15
    },
    _rectangle8: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 5,
        width: 140,
        height: 91,
        borderRadius: 20
    },
    _kingDuke: {
        position: "absolute",
        flexShrink: 0,
        top: 9,
        left: 162,
        width: 111,
        height: 18,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 13,
        fontWeight: "600",
        letterSpacing: 0
    },
    _$1203dayvisit: {
        position: "absolute",
        flexShrink: 0,
        top: 52,
        left: 162,
        width: 95,
        height: 17,
        textAlign: "left",
        color: "rgba(104, 109, 205, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    _toronto: {
        position: "absolute",
        flexShrink: 0,
        top: 32,
        left: 175,
        width: 80,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    ___vector: {
        position: "absolute",
        flexShrink: 0,
        top: 32,
        left: 162,
        width: 9,
        height: 13,
        overflow: "visible"
    },
    ___search: {
        position: "absolute",
        flexShrink: 0,
        top: 74,
        height: 19,
        left: 162,
        width: 84
    },
    ___group20: {
        position: "absolute",
        flexShrink: 0,
        height: 19,
        width: 84
    },
    ___rectangle3: {
        position: "absolute",
        flexShrink: 0,
        width: 84,
        height: 19,
        backgroundColor: "rgba(104, 109, 205, 1)",
        borderWidth: 1,
        borderColor: "rgba(104, 109, 205, 1)",
        borderRadius: 20
    },
    ___bookNow: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        left: 21,
        width: 60,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 9,
        fontWeight: "400",
        letterSpacing: 0
    },
    ___group35: {
        position: "absolute",
        flexShrink: 0,
        top: 9,
        height: 22,
        left: 284,
        width: 44
    },
    ___rectangle35: {
        position: "absolute",
        flexShrink: 0,
        width: 44,
        height: 22,
        backgroundColor: "rgba(31, 31, 41, 1)",
        borderRadius: 5
    },
    ____9: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 5,
        width: 19,
        height: 14,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    ___star3: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 25,
        width: 14,
        height: 14,
        overflow: "visible"
    },
    group3602: {
        position: "absolute",
        flexShrink: 0,
        top: 554,
        height: 102,
        left: 38,
        width: 342
    },
    __group64: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    ____group38: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    ____group25: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    ____rectangle7: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        left: 5,
        width: 141,
        height: 90,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 15
    },
    __rectangle8: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 5,
        width: 140,
        height: 91,
        borderRadius: 20
    },
    __kingDuke: {
        position: "absolute",
        flexShrink: 0,
        top: 9,
        left: 162,
        width: 111,
        height: 18,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 13,
        fontWeight: "600",
        letterSpacing: 0
    },
    __$1203dayvisit: {
        position: "absolute",
        flexShrink: 0,
        top: 52,
        left: 162,
        width: 95,
        height: 17,
        textAlign: "left",
        color: "rgba(104, 109, 205, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    __toronto: {
        position: "absolute",
        flexShrink: 0,
        top: 32,
        left: 175,
        width: 80,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    ____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 32,
        left: 162,
        width: 9,
        height: 13,
        overflow: "visible"
    },
    ____search: {
        position: "absolute",
        flexShrink: 0,
        top: 74,
        height: 19,
        left: 162,
        width: 84
    },
    ____group20: {
        position: "absolute",
        flexShrink: 0,
        height: 19,
        width: 84
    },
    ____rectangle3: {
        position: "absolute",
        flexShrink: 0,
        width: 84,
        height: 19,
        backgroundColor: "rgba(104, 109, 205, 1)",
        borderWidth: 1,
        borderColor: "rgba(104, 109, 205, 1)",
        borderRadius: 20
    },
    ____bookNow: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        left: 21,
        width: 60,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 9,
        fontWeight: "400",
        letterSpacing: 0
    },
    ____group35: {
        position: "absolute",
        flexShrink: 0,
        top: 9,
        height: 22,
        left: 284,
        width: 44
    },
    ____rectangle35: {
        position: "absolute",
        flexShrink: 0,
        width: 44,
        height: 22,
        backgroundColor: "rgba(31, 31, 41, 1)",
        borderRadius: 5
    },
    _____9: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 5,
        width: 19,
        height: 14,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    ____star3: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 25,
        width: 14,
        height: 14,
        overflow: "visible"
    },
    savedtrips: {
        position: "absolute",
        flexShrink: 0,
        top: 59,
        right: 93,
        left: 159,
        height: 24,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 24,
        fontWeight: "600",
        letterSpacing: 0,
        lineHeight: 24
    },
    group3453: {
        position: "absolute",
        flexShrink: 0,
        top: 50,
        height: 38,
        left: 37,
        width: 38
    },
    rectangle13: {
        position: "absolute",
        flexShrink: 0,
        top: 811,
        right: 2,
        width: 411,
        height: 59,
        borderTopWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderColor: "rgba(19, 19, 22, 1)"
    },
    _____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 830,
        right: 284,
        bottom: 19,
        left: 113,
        overflow: "visible"
    },
    ______vector: {
        position: "absolute",
        flexShrink: 0,
        top: 831,
        right: 37,
        bottom: 19,
        left: 356,
        overflow: "visible"
    },
    group3604: {
        position: "absolute",
        flexShrink: 0,
        top: 831,
        height: 21,
        left: 267,
        width: 36
    },
    _______vector: {
        position: "absolute",
        flexShrink: 0,
        top: 829,
        right: 355,
        bottom: 20,
        left: 38,
        overflow: "visible"
    },
    union: {
        position: "absolute",
        flexShrink: 0,
        top: 828,
        left: 192,
        width: 28,
        height: 27,
        overflow: "visible"
    }
})