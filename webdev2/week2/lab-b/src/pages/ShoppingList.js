import React from 'react';
import AppLink from '../components/AppLink';
import { Link } from 'react-router-dom';
import "./style.css"

const ShoppingList = () => {
    return (
        <div className="outer-container">
            <h1>Welcome to My Shopping List</h1>
            <div className="list-container">
                <ol>
                    <AppLink name="Batman: The Killing Joke Deluxe (New Edition)" description="Book" url="https://www.amazon.com/Batman-Killing-Joke-Deluxe-New-ebook/dp/B07XQK1C12/?_encoding=UTF8&pd_rd_w=a6lb4&content-id=amzn1.sym.c3fcbb7c-339f-45ab-80dc-facbe5841fce&pf_rd_p=c3fcbb7c-339f-45ab-80dc-facbe5841fce&pf_rd_r=YYGKAFF823HTR2D900XZ&pd_rd_wg=PfxW6&pd_rd_r=5a32837c-b635-443f-a3ba-135a38674ef0&ref_=pd_gw_reads_dynr" />
                    <AppLink name="The Stoic’s Guide to Emotional Mastery: Learn How to Stay Calm and Disciplined (Emotional Resilience Book 1)" description="Book" url="https://www.amazon.com/Stoics-Guide-Emotional-Mastery-Disciplined-ebook/dp/B0C2FRWL68/?_encoding=UTF8&pd_rd_w=a6lb4&content-id=amzn1.sym.c3fcbb7c-339f-45ab-80dc-facbe5841fce&pf_rd_p=c3fcbb7c-339f-45ab-80dc-facbe5841fce&pf_rd_r=YYGKAFF823HTR2D900XZ&pd_rd_wg=PfxW6&pd_rd_r=5a32837c-b635-443f-a3ba-135a38674ef0&ref_=pd_gw_reads_dynr" />
                    <AppLink name="Fullmetal Alchemist Vol. 7" description="Book" url="https://www.amazon.com/Fullmetal-Alchemist-Vol-Hiromu-Arakawa-ebook/dp/B00JDRL10E/?_encoding=UTF8&pd_rd_w=a6lb4&content-id=amzn1.sym.c3fcbb7c-339f-45ab-80dc-facbe5841fce&pf_rd_p=c3fcbb7c-339f-45ab-80dc-facbe5841fce&pf_rd_r=YYGKAFF823HTR2D900XZ&pd_rd_wg=PfxW6&pd_rd_r=5a32837c-b635-443f-a3ba-135a38674ef0&ref_=pd_gw_reads_dynr" />
                    <AppLink name="Official Luna Gaming Controller" description="Gaming Controller" url="https://www.amazon.com/dp/B07P989QTJ/ref=ods_gw_GW_US_EN_Tempo_LA_JAN24-EVG_H1_Y_C-3044/?_encoding=UTF8&pd_rd_w=HZMbb&content-id=amzn1.sym.97f5e280-cd66-48c5-a24e-dce90b6eccbb&pf_rd_p=97f5e280-cd66-48c5-a24e-dce90b6eccbb&pf_rd_r=WMM04QS6S6X1GEYSJA4T&pd_rd_wg=UpDLg&pd_rd_r=d4593a97-cbd7-49d3-a096-af1659cacd38" />
                    <AppLink name="Graco® Turn2Me™ 3-in-1 Car Seat" description="Baby Car Seat" url="https://www.amazon.com/Graco%C2%AE-Turn2MeTM-Car-Seat-Manchester/dp/B09RD1GH1L?ref_=Oct_DLandingS_D_6b36f419_1" />
                    <AppLink name="Batman: Dark Victory: (New Edition) " description="Book" url="https://www.amazon.com/Batman-Dark-Victory-JEPH-LOEB-ebook/dp/B00I3OIEGM/?_encoding=UTF8&pd_rd_w=m03VO&content-id=amzn1.sym.c3fcbb7c-339f-45ab-80dc-facbe5841fce&pf_rd_p=c3fcbb7c-339f-45ab-80dc-facbe5841fce&pf_rd_r=NFVX1Z6BWDK6ND9A7SE3&pd_rd_wg=2KzTc&pd_rd_r=5d2dea29-748a-488c-9620-dedfcfb8603c&ref_=pd_gw_reads_dynr" />
                </ol>
            </div>
            <Link to={"/"}>Go Back</Link>
        </div>
    );
};

export default ShoppingList;