import { LawyerProfile } from '../data/Data';

export const generateVCard = (data: LawyerProfile): string => {
    const vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${data.name}`,
        `ORG:${data.role}`,
        `TITLE:${data.slogan}`,
        `TEL;TYPE=CELL:${data.contact.whatsapp}`,
        `EMAIL:${data.contact.email}`,
        `URL:${data.contact.site}`,
        `ADR;TYPE=WORK:;;${data.address.street};${data.address.city};;${data.address.zip};Brasil`,
        'END:VCARD'
    ].join('\n');

    return vcard;
};

export const downloadVCard = (data: LawyerProfile) => {
    const vcardContent = generateVCard(data);
    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${data.name.replace(/ /g, '_')}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
