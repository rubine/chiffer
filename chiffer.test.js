var chiffer = {
    chiffers: {
        methodes: {
            scout: {
                type: function () {
                    "use strict";
                    return chiffer.chiffers.five;
                },
                name: {
                    sv: "SCOUTscout",
                    en: ""
                },
                methode: function () {
                    "use strict";
                    return chiffer.chiffers.scoutCrypto;
                }
            },
            other: {
                type: function () {
                    "use strict";
                    return chiffer.chiffers.other;
                },
                name: {
                    sv: "Andra",
                    en: ""
                },
                methode: function () {
                    "use strict";
                    return chiffer.chiffers.alphabet;
                }
            },
            lumberyard: {
                type: function () {
                    "use strict";
                    return chiffer.chiffers.three;
                },
                name: {
                    sv: "Brädgård",
                    en: ""
                },
                methode: function () {
                    "use strict";
                    return chiffer.chiffers.imageCrypto;
                }
            },
            matrise: {
                type: function () {
                    "use strict";
                    return chiffer.chiffers.five;
                },
                name: {
                    sv: "Matris",
                    en: ""
                },
                methode: function () {
                    "use strict";
                    return chiffer.chiffers.matrisCrypto;
                }
            },
            number: {
                type: function () {
                    "use strict";
                    return chiffer.chiffers.alphaNumber;
                },
                name: {
                    sv: "Nummer",
                    en: ""
                },
                methode: function () {
                    "use strict";
                    return chiffer.chiffers.number;
                }
            },
            cesar: {
                type: function () {
                    "use strict";
                    return chiffer.chiffers.alphaNumber;
                },
                name: {
                    sv: "Cesar chiffer",
                    en: ""
                },
                methode: function () {
                    "use strict";
                    return chiffer.chiffers.cesar;
                }
            }
        },
        alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", unescape('%E5'), unescape('%E4'), unescape('%F6'), " "],
        imageCrypto: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", "aa", "ae", "oe", "space"],
        scoutCrypto: ["Ss", "Sc", "So", "Su", "St", "Cs", "Cc", "Co", "Cu", "Ct", "Os", "Oc", "Oo", "Ou", "Ot", "Us", "Uc", "Uo", "Uu", "Ut", "Ts", "Tc", "To", "Tu", "Tt", "Ss", "Sc", "So"],
        numberCrypto: ["1,", "2,", "3,", "4,", "5,", "6,", "7,", "8,", "9,", "10,", "11,", "12,", "13,", "14,", "15,", "16,", "17,", "18,", "19,", "20,", "21,", "22,", "23,", "24,", "25,", "26,", "27,", "28,"],
        matrisCrypto: ["11,", "12,", "13,", "14,", "15,", "21,", "22,", "23,", "24,", "25,", "31,", "32,", "33,", "34,", "35,", "41,", "42,", "43,", "44,", "45,", "51,", "52,", "53,", "54,", "55,", "11,", "12,", "13,"],
        crypto: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", "aa", "ae", "oe", "space"],
        three: {
            remove: [16],
            chifferMethod: {
                down: {
                    name: {
                        sv: "Ner"
                    },
                    serie: [0, 3, 6, 1, 4, 7, 2, 5, 8, 9, 12, 15, 10, 13, 16, 11, 14, 17, 18, 21, 24, 19, 22, 25, 20, 23, 26, 27]
                },
                normal: {
                    name: {
                        sv: "Normal"
                    },
                    serie: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
                },
                g: {
                    name: {
                        sv: "G"
                    },
                    serie: [2, 1, 0, 3, 8, 7, 4, 5, 6, 11, 10, 9, 12, 17, 16, 13, 14, 15, 20, 19, 18, 21, 26, 25, 22, 23, 24, 27]
                },
                row: {
                    name: {
                        sv: "Lång rad"
                    },
                    serie: [0, 1, 2, 9, 10, 11, 18, 19, 20, 3, 4, 5, 12, 13, 14, 21, 22, 23, 6, 7, 8, 15, 16, 17, 24, 25, 26, 27]
                }
            }
        },
        five: {
            remove: [28],
            chifferMethod: {
                normal: {
                    name: {
                        sv: "Normal"
                    },
                    serie: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3]
                },
                down: {
                    name: {
                        sv: "Ner"
                    },
                    serie: [0, 5, 10, 15, 20, 1, 6, 11, 16, 21, 2, 7, 12, 17, 22, 3, 8, 13, 18, 23, 4, 9, 14, 19, 24, 0, 5, 10]
                },
                g: {
                    name: {
                        sv: "Snurra"
                    },
                    serie: [0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20, 15, 10, 5, 6, 7, 8, 13, 18, 17, 16, 11, 12, 0, 1, 2]
                }
            }
        },
        other: {
            remove: [],
            chifferMethod: {
                backward: {
                    name: {
                        sv: "Baklänges"
                    }
                },
                everyOther: {
                    name: {
                        sv: "Varannan"
                    }
                }
            }
        },

        alphaNumber: {
            remove: [28],
            chifferMethod: {
                normal: {
                    name: {
                        sv: "Förskut"
                    },
                    serie: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
                },
                g: {
                    name: {
                        sv: "Baklänges"
                    }
                },
                one: {
                    name: {
                        sv: "1"
                    },
                    serie: 1
                },
                ten: {
                    name: {
                        sv: "10"
                    },
                    serie: 10
                },
                fiftin: {
                    name: {
                        sv: "15"
                    },
                    serie: 15
                }
            }
        },
        alpha: {
            remove: [28],
            chifferMethod: {
                normal: {
                    name: {
                        sv: "Förskut"
                    },
                    serie: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
                },
                one: {
                    name: {
                        sv: "1"
                    },
                    serie: 1
                },
                ten: {
                    name: {
                        sv: "10"
                    },
                    serie: 10
                },
                fiftin: {
                    name: {
                        sv: "15"
                    },
                    serie: 15
                },
                g: {
                    name: {
                        sv: "Baklänges"
                    }
                }
            }
        }
    },
    updateList: function (list) {
        "use strict";
        // list.next();
    },
    populate: function () {
        $.each(chiffer.chiffers.methodes, function (key, value) {
            $(".chiffer").html($(".chiffer").html() + '<option value="' + key + '">' + value.name.sv + '</option>');
        });
        $(".chiffer").change(function () {
            var sort = this;
            $(sort).next().html("");
            $.each(chiffer.chiffers.methodes[$(this).val()].type().chifferMethod, function (key, value) {
                $(sort).next().html($(sort).next().html() + '<option value="' + key + '">' + value.name.sv + '</option>');
            });
        });
        $(".chiffer").each(function () {
            var sort = this;
            $(sort).next().html("");
            $.each(chiffer.chiffers.methodes[$(this).val()].type().chifferMethod, function (key, value) {
                $(sort).next().html($(sort).next().html() + '<option value="' + key + '">' + value.name.sv + '</option>');
            });
        });
    },
    convert: function (input, to, keytext) {
        "use strict";
        var alphabet = jQuery.extend([], chiffer.chiffers.alphabet),
            imageCrypto = $.extend([], chiffer.chiffers.imageCrypto),
            text = $(input).val(),
            type = $(input).next().val(),
            sorte = $(input).next().next().val(),
            offset = $(input).next().next().next().val(),
            theChiffer = chiffer.chiffers.methodes[type].type(),
            methode = $.extend([], chiffer.chiffers.methodes[type].methode()),
            key,
            theKey,
            add,
            charactars,
            numberCrypto,
            alphabetCrypto,
            scoutCrypto,
            textarray,
            newText,
            i;
        if (keytext) {
            keytext = $(keytext);
            text = keytext.val();
        }

        alphabet = chiffer.remove(theChiffer.remove, alphabet);
        switch (type) {
        case "lumberyard":
            if (sorte !== undefined && sorte !== null) {
                theKey = theChiffer.chifferMethod[sorte].serie;
            } else {
                theKey = theChiffer.chifferMethod.normal.serie;
            }
            // console.log(chiffer.chiffers.methodes[type].type());
            // theChiffer = chiffer.chiffers.three;
            imageCrypto = chiffer.remove(theChiffer.remove, imageCrypto);
            text = chiffer.encrypt(text, alphabet, alphabet, theKey, false, true);
            break;
        case "scout":
            if (sorte !== undefined && sorte !== null) {
                theKey = theChiffer.chifferMethod[sorte].serie;
            } else {
                theKey = theChiffer.chifferMethod.normal.serie;
            }
            // theChiffer = chiffer.chiffers.alphaNumber;
            // alphabet = chiffer.remove(theChiffer.remove, alphabet);
            key = $.extend([], theChiffer.chifferMethod.normal.serie);
            scoutCrypto = $.extend([], chiffer.chiffers.scoutCrypto);
            text = chiffer.encryptToMatris(text, alphabet, scoutCrypto, theKey, true, false);
            break;
        case "matrise":
            // theChiffer = chiffer.chiffers.alphaNumber;
            // alphabet = chiffer.remove(theChiffer.remove, alphabet);
            key = $.extend([], theChiffer.chifferMethod.normal.serie);
            scoutCrypto = $.extend([], chiffer.chiffers.matrisCrypto);
            text = chiffer.encryptToMatris(text, alphabet, methode, key);
            break;
        case "cesar":
            // theChiffer = chiffer.chiffers.alphaNumber;
            // alphabet = chiffer.remove(theChiffer.remove, alphabet);
            //imageCrypto = chiffer.remove(theChiffer.remove, imageCrypto);
            key = $.extend([], theChiffer.chifferMethod.normal.serie);
            if (offset !== undefined && offset !== null) {
                add = parseInt(offset, false);
            } else if (sorte !== undefined && sorte !== null) {
                //console.log(theChiffer.chifferMethod[sorte].serie);
                add = parseInt(theChiffer.chifferMethod[sorte].serie, false);
            } else {
                add = 0;
            }
            alphabetCrypto = $.extend([], chiffer.chiffers.alphabet);
            for (charactars in key) {
                if (key.hasOwnProperty(charactars)) {
                    if (key[charactars] + add < key.length) {
                        key[charactars] = key[charactars] + add;
                    } else {
                        key[charactars] = key[charactars] - key.length + add;
                    }
                }
            }
            text = chiffer.encrypt(text, alphabet, alphabetCrypto, key, false, true);
            break;
        case "number":
            // theChiffer = chiffer.chiffers.alphaNumber;
            // alphabet = chiffer.remove(theChiffer.remove, alphabet);
            //imageCrypto = chiffer.remove(theChiffer.remove, imageCrypto);
            key = $.extend([], theChiffer.chifferMethod.normal.serie);
            if (sorte !== undefined && sorte !== null && theChiffer.chifferMethod[sorte] !== undefined) {
                //console.log(theChiffer.chifferMethod[sorte].serie);
                add = parseInt(theChiffer.chifferMethod[sorte].serie);
            } else {
                add = 0;
            }
            numberCrypto = $.extend([], chiffer.chiffers.numberCrypto);
            for (charactars in key) {
                if (key.hasOwnProperty(charactars)) {
                    if (key[charactars] + add < key.length) {
                        key[charactars] = key[charactars] + add;
                    } else {
                        key[charactars] = key[charactars] - key.length + add;
                    }
                }
            }
            text = chiffer.encrypt(text, alphabet, numberCrypto, key, false, true);
            break;
        case "other":
            textarray = text.split('');
            i = 0;
            newText = "";
            switch (sorte) {
            case "backward":
                for (i in textarray) {
                    newText += textarray[textarray.length - i - 1];
                }
                text = newText;
                break;
            case "everyOther":
                for (i in textarray) {
                    newText += textarray[i] + chiffer.chiffers.alphabet[Math.floor(Math.random() * (28 - 1 + 1) + 1)];
                }
                text = newText;
                break;
            }
            break;
        }
        if (keytext) {
            text += ' / <span class="start">' + keytext.val() + '</span>';
        }
        $(to).attr('class', '');
        $(to).html(text);
        $(to).addClass(type);
        if (keytext) {
            $(to).addClass('key');
        }
    },
    remove: function (removebul, alphabet) {
        "use strict";
        $.each(removebul, function () {
            alphabet.splice(removebul, 1);
        });
        return alphabet;
    },
    encrypt: function (text, alphabet, imageCrypto, key, image, alphabetic) {
        "use strict";
        var i, returner;
        for (i in alphabet) {
            if (alphabet.hasOwnProperty(i)) {
                text = text.replace(alphabet[i], "{" + imageCrypto[i] + "}", "gi");
            }
        }
        if (image) {
            returner = chiffer.encryptToImage(text, alphabet, imageCrypto, key);
        } else if (alphabetic) {
            returner = chiffer.encryptToAlphabetic(text, alphabet, imageCrypto, key);
        }
        return returner;
    },
    encryptToMatris: function (text, alphabet, imageCrypto, key) {
        "use strict";
        var i,
        test;
        for (i in alphabet) {
            if (alphabet.hasOwnProperty(i)) {
                test = alphabet[key[i]];
                text = text.replace(alphabet[i], "{" + alphabet[i] + "}", "gi");
            }
        }
        for (i in alphabet) {
            if (alphabet.hasOwnProperty(i)) {
                test = alphabet[key[i]];
                text = text.replace("{" + alphabet[i] + "}", "{" + key[i] + "}", "gi");
            }
        }
        for (i in alphabet) {
            if (alphabet.hasOwnProperty(i)) {
                text = text.replace("{" + i + "}", imageCrypto[i], "gi");
            }
        }
        text = text.replace(", ", " ", "gi");
        return text;
    },
    encryptToImage: function (text, alphabet, imageCrypto, key) {
        "use strict";
        var i;
        for (i in imageCrypto) {
            if (imageCrypto.hasOwnProperty(i)) {
                text = text.replace("{" + imageCrypto[i] + "}", '<div class="' + imageCrypto[key[i]] + '"></div>', "gi");
            }
        }
        return text;
    },
    encryptToAlphabetic: function (text, alphabet, crypto, key) {
        "use strict";
        var i;
        for (i in crypto) {
            if (crypto.hasOwnProperty(i)) {
                text = text.replace("{" + crypto[i] + "}", crypto[key[i]], "gi");
            }
        }
        text = text.replace(", ", " ", "gi");
        return text;
    }
};