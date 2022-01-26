package com.adobe.aem.hack.proj.core.models;

import com.adobe.cq.wcm.core.components.models.Image;
import org.osgi.annotation.versioning.ProviderType;

@ProviderType
public interface ProfileCardModel extends Image {

    public String getProfileText();

}
