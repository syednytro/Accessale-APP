import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Navigation } from 'react-native-navigation';
import { colors } from '../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler';

const TermsCondition = (props) => {

    const componentId = props.componentId;

    useNavigationButtonPress(e => {
        if (e.buttonId === 'close-modal') {
            Navigation.dismissModal(componentId);
        };
    }, componentId);

    return (
        <ScrollView style={styles.container}>
            <View style={{ margin: 20 }}>
                <Text style={{ fontFamily: "Lato-Light", fontSize: 16 }}>
                    The following disclaimer and terms of use apply generally to all postings to the Accessale.com site.
                    It is hereby also understood that any person posting to Accessale.com has been presented with this disclaimer and terms of use prior to doing so and, as such, be subject to its terms as indicated
                    below. By visiting this website and/or using any of the products and/or services on this website, you
                    agree to the following terms of use. If you do not agree with the following terms of use,
                    please leave this website.{"\n"}
                    Accessale.com is not involved in any transaction between buyers and sellers. Website acts as an
information distributor only (NOT as an information publisher) and website owner assumes no liability for the information or content posted on website. You expressly agree that use of
Accessale.com is at your own risk. Accessale.com expressly disclaims all warranties of any kind,
whether implied warranties of merchantability, fitness for a particular purpose, and non
infringement. It is provided to you &quot;as is&quot; and Accessale.com makes no warranty that Accessale.com will be timely, secure, error free, or meet your requirements; nor does
Accessale.com make any warranty as to the results that may be obtained from the use of
Accessale.com or as to the accuracy or reliability of any information obtained through Accessale.com No party shall be liable to any other party or any third-party for third-party claims or losses of any nature, including, but not limited to, lost profits, punitive or consequential damages.
Accessale.com reserves the right to remove any listings or any advertisements for any reason.{"\n"}
                </Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>
                    ABILITY TO ACCEPT TERMS OF SERVICE
            </Text>
                <Text style={{ fontFamily: 'Lato-Light', fontSize: 16 }}>
                    Accessale.com is intended only for adults. You affirm that you are either more than 18 years of age, or an emancipated minor. You affirm that you possess legal parental or guardian consent, and are fully able and competent to enter into the terms, conditions, obligations, affirmations,
                    representations, and warranties set forth in these Terms, and to abide by and comply with these
                    Terms. In any case, you affirm that you are over the age of 13, as the Website is not intended for
children under 13.{"\n"}
                </Text>

                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 }}>
                    POSTING RULES{"\n"}
                </Text>
                <Text style={{ fontFamily: 'Lato-Light', fontSize: 16 }}>
                    We reserve the right to remove any content posted on our site at any time for any reason.
                    Accessale.com will make decisions as to whether content violates any Terms in its discretion after
                    we have actual notice of such posting. We treat free members and premium members equally when dealing with terms violation. Without limiting our right to remove content, we have attempted to
                    provide guidelines to those posting content on our site. When using Accessale.com, please do not
post material that:{"\n"}{"\n"}
- Contains vulgar, profane, abusive, racist or hateful language or expressions, epithets or slurs, text, photographs or illustrations in poor taste, inflammatory attacks of a personal, racial nature.{"\n"}
- We do not accept any ads for "Escorts services".{"\n"}
- We do not accept any ads for "dating" type websites.{"\n"}
- We do not accept any ads which contain any adult content, here are some other examples of unacceptable content:{"\n"}
- Lewd or provocative images;{"\n"}
- Crude or indecent language, including adult stories;{"\n"}
- Sexual tips or advice;{"\n"}
- Sexual fetish sites (e.g. foot fetish content);{"\n"}
- Adult toys or products;{"\n"}
- We do not accept any of the following:{"\n"}
- Alcohol-related content;{"\n"}

- Tobacco-related content;{"\n"}
- Gambling content;{"\n"}
- Spy cameras.{"\n"}
- Is defamatory, threatening, disparaging, grossly inflammatory, false, misleading, fraudulent, inaccurate, unfair, contains gross exaggeration or unsubstantiated claims, violates the privacy rights of any third party, is unreasonably harmful or offensive to any individual or community.{"\n"}
- Discriminates on the grounds of race, religion, national origin, gender, age, marital status, sexual orientation or disability, or refers to such matters in any manner prohibited by law.{"\n"}
- Violates or inappropriately encourages the violation of any municipal, state, federal or international law, rule, regulation or ordinance.{"\n"}
- Advertises, promotes or offers to trade any goods or services, except in areas specifically designated for such purpose.{"\n"}
- We do not accept ads for, or linking to, prescription drugs or pharmacies.{"\n"}
- Uploads copyrighted or other proprietary material of any kind on Accessale.com without the express permission of the owner of that material.{"\n"}{"\n"}
- To publish repeatedly the same or similar Content (regardless of categories or regions).
You may place just one ad about your product /service / item in one the most suitable
category and in that region where the product you sell is located or an office providing a
service is located (How to show your ad in additional regions, without adding double ad,refer to (Help Desk).{"\n"} {"\n"}
- To publish Content in the irrelevant category. You may not place your ad in the irrelevant
category. You may place just one ad about your product /service / item in one the most suitable category.{"\n"}{"\n"}
- Ads that have no product. Your ads must be selling something. It must have a
specific product/service/item, It must have a the appropriate description. We do not
allow ads that just say, &quot;come to my web site for details&quot; in the description. While we
allow you to post your site URL (only to page of your site of a containing detail of the
ad) in the ad, if your ad does not contain the details of the product, including price or a price range, listed in the subject, it will be removed.{"\n"}
- Various product/service/item in one ad is not allowed. Only one product/service/item in one ad.{"\n"}
- We suggest that you only use ALL-CAPS where necessary in your ad description. All Titles
are published in a Very Large Distinguishable Font Style, so you should not need to use
ALL-CAPS there either. You can draw special attention to ads in the ways intended for this
purpose.{"\n"}
- You may not include words or phrases into your ad title or description that are there for the
sole purpose of returning your ad for more search phrases. Your ad must be readable and
the content must reflect the item/service being advertised and nothing else.{"\n"}
- You may not include any text, links, graphics, content or other elements in your ads which
are not directly related to the item/product/service being advertised.{"\n"}
- You may not include your site domain name (example: my-domain-name.com),
telephone number, email into your ad title.{"\n"}
- Uploads or transmits viruses or other harmful, disruptive or destructive files.{"\n"}
- Weapons and related items (such as firearms, firearm parts and magazines, ammunition,
BB and pellet guns, tear gas, stun guns, switchblade knives, and martial arts weapons).{"\n"}
- Disrupts, interferes with, or otherwise harms or violates the security of Accessale.com, or
any services, system resources, accounts, passwords, servers or networks connected to or
accessible through Accessale.com or affiliated or linked sites.{"\n"}
                </Text>

                <Text style={{ fontFamily: "Lato-Regular", fontSize: 16 }}>POSTING AGENTS</Text>
                <Text style={{ fontFamily: "Lato-Light", fontSize: 16 }}>
                {"\n"}
                    As used herein, the term "Posting Agent" refers to a third-party agent, service, or intermediary that
                    offers to post Content to the Service on behalf of others. Accessale.com prohibits the use of Posting
                    Agents, directly or indirectly, without the express written permission of Accessale.com In addition,
                    Posting Agents are not permitted to post Content on behalf of others, directly or indirectly, or
                    otherwise access the Service to in order to post Content on behalf of others, except with express
                    written permission or license from Accessale.com.{"\n"}</Text>

                <Text style={{ fontFamily: "Lato-Regular", fontSize: 16 }}>REFUND POLICY</Text>
                <Text style={{ fontFamily: "Lato-Light", fontSize: 16 }}>
                {"\n"} Placement of ads on our site is absolutely free during 30 days. However we offer some paid
                    advertizing services (according to your needs) which improve ad viewability on the site.
                    Because purchased services and subscriptions for the use of Accessale.com are rendered and you
                    have the use and receive the benefits of said services instantly, all payments are final and refunds cannot be granted. If a customer has a billing dispute with Accessale.com, the customer must settle such dispute with Accessale.com directly (Help desk for support without initiating any chargeback.{"\n"}procedures.{"\n"}</Text>

                <Text style={{ fontFamily: "Lato-Regular", fontSize: 16 }}>CONTENT</Text>
                <Text style={{ fontFamily: "Lato-Light", fontSize: 16 }}>
                {"\n"} The information found within Accessale.com is for informational purposes only and NOT intended
                    as medical, legal, or professional advice. You must evaluate, and bear the risk associated with, the
                    accuracy, completeness or usefulness of any Content. Accessale.com shall not be responsible for any Content. Accessale.com does not pre-screen or monitor all Content as a matter of policy, but
                    Accessale.com shall have the right, but not the responsibility, to remove Content which is deemed in sole discretion harmful, offensive, or otherwise in violation of this Disclaimer and Terms of Use or
                    any rules Accessale.com has in place at the time. Accessale.com may elect at its sole discretion to
monitor some, all, or no areas of Accessale.com for adherence to this Terms or rules.{"\n"}</Text>

                <Text style={{ fontFamily: "Lato-Regular", fontSize: 16 }}>INTELLECTUAL PROPERTY</Text>
                <Text style={{ fontFamily: "Lato-Light", fontSize: 16 }}>
                {"\n"}You agree that you will not upload or transmit any Content to Accessale.com that infringes any
                    patent, trademark, trade secret, copyright or other proprietary rights ("Rights") of any party. By
                    submitting Content to Accessale.com you automatically grant or warrant that the owner of such Content has expressly granted Accessale.com the royalty-free, perpetual, irrevocable, non-
                    exclusive right and license to use, reproduce, adapt, publish, translate, create derivative works
                    from, distribute, perform and display such Content (in whole or part) worldwide and/or to incorporate it in other works in any form, media, or technology now known or later developed for the full term of
                    any Rules that may exist in such Content.{"\n"}
                   </Text>

                <Text style={{ fontFamily: "Lato-Regular", fontSize: 16 }}>PRIVACY STATEMENT</Text>
                <Text style={{ fontFamily: "Lato-Light", fontSize: 16 }}>
                {"\n"} Your privacy is important to us. We will not sell or trade your private information with anyone or any
                    company. You can learn more about  Accessale.com Privacy Policy. This website contains links to other websites. We are not responsible for the privacy practices of those websites. Please ensure you review the privacy policies of the websites that you visit. Some pages use Google Adsense Advertising Network. You can learn more about Google's privacy policy by clicking here.{"\n"}
                    
                </Text>

                <Text style={{ fontFamily: "Lato-Regular", fontSize: 16 }}>MODIFICATION OF TERMS</Text>
                <Text style={{ fontFamily: "Lato-Light", fontSize: 16 }}>
                {"\n"} Accessale.com reserves the right to modify this policy at any time and without advance notice,
                    effective upon making the modified provisions available on the Accessale.com Web Site. You are
                    responsible for regularly reviewing these documents. Continued use of the Accessale.com Web Site after any such changes shall constitute your consent to such changes. Accessale.com does not and will not assume any obligation to notify you of any.{"\n"}
                </Text>


            </View>




        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
});

export default TermsCondition;
